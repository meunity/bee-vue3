module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  customSyntax: 'postcss-html',
  rules: {
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    'no-empty-source': null,
    'string-quotes': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    // 'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
    // 属性的排序
    'order/properties-order': [
      'position',
      'z-index',
      'top',
      'bottom',
      'left',
      'right',
      'float',
      'clear',
      'columns',
      'columns-width',
      'columns-count',
      'column-rule',
      'column-rule-width',
      'column-rule-style',
      'column-rule-color',
      'column-fill',
      'column-span',
      'column-gap',
      'display',
      'grid',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-column-gap',
      'grid-row-gap',
      'grid-template',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas',
      'grid-gap',
      'grid-row-gap',
      'grid-column-gap',
      'grid-area',
      'grid-row-start',
      'grid-row-end',
      'grid-column-start',
      'grid-column-end',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'flex-flow',
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-content',
      'align-items',
      'align-self',
      'order',
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-collapse',
      'border-spacing',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'ruby-align',
      'ruby-merge',
      'ruby-position',
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'border',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-top',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-top-left-radius',
      'outline',
      'outline-width',
      'outline-color',
      'outline-style',
      'outline-offset',
      'overflow',
      'overflow-x',
      'overflow-y',
      'resize',
      'visibility',
      'font',
      'font-style',
      'font-variant',
      'font-weight',
      'font-stretch',
      'font-size',
      'font-family',
      'font-synthesis',
      'font-size-adjust',
      'font-kerning',
      'line-height',
      'text-align',
      'text-align-last',
      'vertical-align',
      'text-overflow',
      'text-justify',
      'text-transform',
      'text-indent',
      'text-emphasis',
      'text-emphasis-style',
      'text-emphasis-color',
      'text-emphasis-position',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-style',
      'text-decoration-line',
      'text-underline-position',
      'text-shadow',
      'white-space',
      'overflow-wrap',
      'word-wrap',
      'word-break',
      'line-break',
      'hyphens',
      'letter-spacing',
      'word-spacing',
      'quotes',
      'tab-size',
      'orphans',
      'writing-mode',
      'text-combine-upright',
      'unicode-bidi',
      'text-orientation',
      'direction',
      'text-rendering',
      'font-feature-settings',
      'font-language-override',
      'image-rendering',
      'image-orientation',
      'image-resolution',
      'shape-image-threshold',
      'shape-outside',
      'shape-margin',
      'color',
      'background',
      'background-image',
      'background-position',
      'background-size',
      'background-repeat',
      'background-origin',
      'background-clip',
      'background-attachment',
      'background-color',
      'background-blend-mode',
      'isolation',
      'clip-path',
      'mask',
      'mask-image',
      'mask-mode',
      'mask-position',
      'mask-size',
      'mask-repeat',
      'mask-origin',
      'mask-clip',
      'mask-composite',
      'mask-type',
      'filter',
      'box-shadow',
      'opacity',
      'transform-style',
      'transform',
      'transform-box',
      'transform-origin',
      'perspective',
      'perspective-origin',
      'backface-visibility',
      'transition',
      'transition-property',
      'transition-duration',
      'transition-timing-function',
      'transition-delay',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
      'animation-play-state',
      'scroll-behavior',
      'scroll-snap-type',
      'scroll-snap-destination',
      'scroll-snap-coordinate',
      'cursor',
      'touch-action',
      'caret-color',
      'ime-mode',
      'object-fit',
      'object-position',
      'content',
      'counter-reset',
      'counter-increment',
      'will-change',
      'pointer-events',
      'all',
      'page-break-before',
      'page-break-after',
      'page-break-inside',
      'widows',
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      extends: ['stylelint-config-recommended'],
      rules: {
        'keyframes-name-pattern': null,
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
      },
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
    },
  ],
};
