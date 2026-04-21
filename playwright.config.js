import {defineConfig} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    retries: 0,
    reporter: 'html',
    use: {
        headless: false,
        viewport: {width: 1280, height: 720},
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'only-on-failure',
        baseURL: 'https://www.knowledgeware.in',
    },
    projects: [
    {
        name: 'chromium',
        use: {
            browserName: 'chromium',
            }
        
        // name: 'firefox',
        // use: {
        //     browserName: 'firefox',
        //     },                
         }
    ],
    reporter: [
        ['html', { outputFolder: 'html-report', open : 'never'  }],
    
    ]
}); 