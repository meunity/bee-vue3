import type { LocationQueryRaw, Router } from 'vue-router';
import NProgress from 'nprogress';
import { useUserStore } from '@/stores';
import { DEFAULT_ROUTE_NAME, LOGIN_NAME, NOT_FOUND_NAME, whiteNameList } from '@/constants';

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();

    const userStore = useUserStore();
    if (userStore.isLogin()) {
      if (to.name === LOGIN_NAME) {
        next({ name: DEFAULT_ROUTE_NAME });
      } else {
        if (userStore.userInfo.uid) {
          next();
        } else {
          try {
            await userStore.doLoadLoginInfo();
            // 添加路由
            const hasRoute = router.hasRoute(to.name!);
            if (hasRoute) {
              next();
            } else {
              next({
                name: NOT_FOUND_NAME,
                query: {
                  redirect: to.fullPath,
                  ...to.query,
                } as LocationQueryRaw,
                replace: true,
              });
            }
          } catch (e) {
            await userStore.doLogout();
            next({
              name: LOGIN_NAME,
              query: {
                redirect: to.fullPath,
                ...to.query,
              } as LocationQueryRaw,
            });
          }
        }
      }
    } else {
      if (whiteNameList.some((n) => n === to.name)) {
        // 在免登录名单，直接进入
        next();
      } else {
        next({ name: LOGIN_NAME, query: { redirect: to.fullPath }, replace: true });
      }
    }
  });
}
