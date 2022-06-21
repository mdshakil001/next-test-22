const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// export default async (req, res) => {
const SiteMap = async (req, res) => {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1 },
        { url: '/health-screening', changefreq: 'daily', priority: 0.9 },
        { url: '/our-story', changefreq: 'daily', priority: 0.9 },
        { url: '/contact-us', changefreq: 'daily', priority: 0.9 },
        { url: '/articles', changefreq: 'daily', priority: 0.9 },

        { url: '/articles/what-is-health-screening-do-we-need-to-do-it', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/is-my-blood-pressure-too-high', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/treating-hypertension-here-s-how', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/is-diabetes-just-about-sugars', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/treatment-of-diabetes-is-it-just-about-tablets', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/uh-oh-watch-out-for-that-high-cholesterol', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/how-you-can-remove-the-high-from-high-cholesterol', changefreq: 'daily', priority: 0.8 },

        { url: '/articles/why-don-t-i-feel-sexually-active-how-do-i-restore-my-libido', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/why-can-t-i-delay-ejaculation', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/what-is-erectile-dysfunction', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/what-does-benign-enlargement-of-the-prostate-mean', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/treatment-of-erectile-dysfunction', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/the-prostate-and-the-man', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/how-can-i-recover-from-benign-prostatic-hyperplasia-bph', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/how-can-i-delay-ejaculation-and-last-longer-in-bed', changefreq: 'daily', priority: 0.8 },

        { url: '/articles/how-does-an-active-lifestyle-help-with-ageing', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/how-do-I-deal-with-osteoporosis', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/dementia-is-cognitive-decline-part-of-normal-ageing', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/are-you-suffering-from-depression', changefreq: 'daily', priority: 0.8 },

        { url: '/articles/what-is-parkinsons-disease', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/what-is-dementia', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/what-is-a-stroke', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/what-are-vascular-diseases', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/treatments-of-stroke', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/is-it-normal-to-get-a-headache', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/how-do-we-detect-alzheimers-disease-early', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/does-parkinsons-disease-have-a-cure', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/do-you-have-deep-vein-thrombosis', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/can-deep-vein-thrombosis-be-prevented', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/alzheimers-disease-is-it-a-normal-part-of-ageing', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/irregular-menses-is-it-normal', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/do-birth-control-pills-work', changefreq: 'daily', priority: 0.8 },
        { url: '/articles/aside-from-birth-control-pills-how-else-can-i-prevent-pregnancy', changefreq: 'daily', priority: 0.8 },

    ];
    
    // const stream = new SitemapStream({ hostname: 'https://www.myhealthcare.com' });
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}`});

    res.writeHead(200, {
        'Content-Type': 'application/xml',
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
};

export default SiteMap;