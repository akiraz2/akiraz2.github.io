const {description} = require('../../package');

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Веб-разработчик',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,
    dest: './docs',
    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'icon', href: '/favicon-96x96.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        search: false,
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Стек',
                link: '/index#стек-используемых-технологии'
            },
            {
                text: 'Примеры кода',
                link: '/code-examples'
            },
            {
                text: 'Контакты',
                link: '/index#контакты'
            },
            {
                text: 'Проекты',
                link: '/projects/'
            },
            {
                text: 'Собеседования',
                link: '/interviews/'
            },
            {
                text: 'Блог',
                link: '/blog/'
            }
        ],
        sidebar: {
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        [
            'metrika',
            {
                counter: '70635346',
                config: {
                    accurateTrackBounce: true,
                    clickmap: true,
                    trackLinks: true,
                    webvisor: true
                }
            }
        ]
    ]
};
