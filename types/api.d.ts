declare interface APIResult<T = any> {
  /**
   * @description 错误码
   */
  readonly code: number;

  /**
   * @description 提示信息
   */
  readonly message: string;

  /**
   * @description 返回的数据，错误时不返回
   */
  readonly result: T;

  /**
   * @description 请求Id
   */
  readonly requestId: string;

  /**
   * @description 时间戳
   */
  readonly time: number;
}

declare interface APIPaginationInput {
  /** 当前分页 */
  pageNo?: number;

  /** 分页大小 */
  pageSize?: number;
}

declare interface APIPaginationOutput<T> {
  /** 当前分页 */
  pageNo: number;

  /** 分页大小 */
  pageSize: number;

  /** total */
  total: number;

  data: T[];
}

/** 分页请求结果 */
declare type APIPaginationResult<T, T1 = APIPaginationOutput<T>> = APIResult<T1>;

/** 无分页列表请求结果 */
declare type APIListResult<T, T1 = T[]> = APIResult<T1>;
