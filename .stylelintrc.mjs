/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recess-order',
        '@stylistic/stylelint-config',
    ],
    rules: {
        'at-rule-empty-line-before': ['always', {
            except: [
                'blockless-after-same-name-blockless',
                'first-nested'
            ],
            ignore: ['after-comment'],
            ignoreAtRules: ['else']
        }],
        'media-feature-range-notation': 'prefix',
        'value-keyword-case': [
            'lower',
            {
                ignoreProperties: [
                    '$font-family-monospace'
                ],
                camelCaseSvgKeywords: true
            }
        ],
        'alpha-value-notation': null,
        'color-function-alias-notation': null,
        'color-function-notation': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'declaration-empty-line-before': null,
        'function-url-quotes': null,
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
        'rule-empty-line-before': null,
        'selector-attribute-quotes': null,
        'selector-class-pattern': null,
        'selector-id-pattern': null,
        'shorthand-property-no-redundant-values': null,
        // Stylistic
        '@stylistic/at-rule-name-space-after': 'always',
        '@stylistic/at-rule-semicolon-space-before': 'never',
        '@stylistic/block-closing-brace-empty-line-before': null,
        '@stylistic/block-closing-brace-newline-after': null,
        '@stylistic/block-opening-brace-space-before': null,
        '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
        '@stylistic/max-empty-lines': 2,
        '@stylistic/max-line-length': null,
        '@stylistic/number-leading-zero': 'never',
        '@stylistic/selector-list-comma-newline-after': 'always-multi-line',
        '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
        '@stylistic/selector-list-comma-space-after': 'always-single-line',
        '@stylistic/selector-list-comma-space-before': 'never-single-line',
        '@stylistic/unicode-bom': 'never',
        '@stylistic/value-list-comma-newline-after': 'never-multi-line',
        '@stylistic/value-list-comma-newline-before': 'never-multi-line',
        '@stylistic/value-list-comma-space-after': 'always',
        // SCSS
        'scss/double-slash-comment-empty-line-before': null,
        'scss/double-slash-comment-whitespace-inside': null,
        'scss/no-global-function-names': null
    }
}
