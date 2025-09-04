import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'How To Study CS',
    description: 'A Document About How To Study CS',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    lang: 'zh-CN',
    base: '/doc/',
    ignoreDeadLinks: true,
    lastUpdated: true,
    themeConfig: {
        outline: {
            level: [1, 6],
            label: '大纲'
        },
        logo: 'favicon.ico',
        nav: [
            { text: '主页', link: '/index' },
            { text: '正文', link: '/start' },
            { text: '博客', link: 'https://meishibiezb.xyz/' }
        ],
        socialLinks: [
            { icon: 'bilibili', link: 'https://www.bilibili.com/' },
            { icon: 'github', link: 'https://github.com/meishibiezb/how_to_study_cs' }
        ],
        sidebar: [
            {
                text: '目录',
                items: [
                    { text: '开始', link: '/start' },
                    { text: '核心素养', link: '/essential-competences' },
                    { text: '学习路径', link: '/study-path' },
                    {
                        text: '学习资源', items: [
                            { text: '课程资源', link: '/courses-resources' },
                            { text: '软件资源', link: '/software-resources' },
                            { text: '实用工具', link: 'utility-tools' }
                        ]
                    },
                    { text: '关于', link: '/about'}
                ]
            }
        ],
        sidebarMenuLabel: '目录',
        returnToTopLabel: '回到顶部',
        lastUpdated: {
            text: '最后更新',
            formatOptions: {
                dateStyle: 'medium'
            }
        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭'
                        }
                    }
                }
            }
        }
    }
})