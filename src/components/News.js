import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    // Making an array 
    articles = [
        
        {
            
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Lauren Goode",
            "title": "Ultra-Long Battery Life Is Coming … Eventually",
            "description": "Consumer electronics companies are boasting about unprecedented leaps in battery tech. How legit are the claims?",
            "url": "https://www.wired.com/story/ultra-long-battery-life-coming-eventually/",
            "urlToImage": "https://media.wired.com/photos/61d779f754280e488a4ba43e/191:100/w_1280,c_limit/ces-battery-life.jpg",
            "publishedAt": "2022-01-14T12:00:00Z",
            "content": "One company thats aiming to improve lithium-ion batteries by as much as 50 percent is Sila Nano, which WIRED profiled late last year. Sila Nanos technology can reportedly hold about 24 times as much … [+3307 chars]"
        },
        
        {
            
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jay Peters",
            "title": "PUBGs developer is suing Apple, Google, and the developer of lucrative PUBG lookalike Free Fire",
            "description": "PUBG-maker Krafton filed a big lawsuit Monday: its suing Garena, the developer of two mobile games that Krafton accuses of copying PUBG: Battlegrounds, and its suing Apple and Google for distributing those games on their app stores.",
            "url": "https://www.theverge.com/2022/1/13/22882796/pubg-developer-krafton-suing-apple-google-garena-free-fire-max",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Clv3vDVTwiE8ycd3s5pZQ77xn5c=/0x23:1168x635/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23167670/PUBG_CPP_2_1168x657.jpeg",
            "publishedAt": "2022-01-14T02:14:54Z",
            "content": "Krafton takes issue with Garena Free Fire and Garena Free Fire Max\r\nPUBG-maker Krafton filed a big lawsuit Monday.\r\nImage: Krafton\r\nPUBG-maker Krafton filed a big lawsuit Monday: its suing the develo… [+3634 chars]"
        },
        
        {
            
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Sean Hollister",
            "title": "School employee stole 3,000 Apple iPods earmarked for Native American kids",
            "description": "She ran a program that used iPods to teach reading and math to underprivileged Native American schoolkids living on tribal land. Now, 46-year-old Kristy Stock of New Mexico is getting 18 months in prison for stealing 3,000 of them.",
            "url": "https://www.theverge.com/22882758/ipod-theft-kristy-stock-native-american-students-new-mexico-school-district",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/B6lnMukJrZgjcVRmEx___mB_3Ow=/0x146:1020x680/fit-in/1200x630/cdn.vox-cdn.com/assets/2517705/IMG_6762.jpg",
            "publishedAt": "2022-01-14T00:11:20Z",
            "content": "Shes getting 18 months in prison\r\nShe ran a program that used iPods to teach reading and math to underprivileged Native American schoolkids living on tribal land. Now, 46-year-old Kristy Stock of New… [+3163 chars]"
        },
        
        {
            
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "Google TV exploring fitness, smart home control, and other new features for 2022",
            "description": "Google TV director of product management says the company is interested in offering better smart home controls through Google TV, as well as fitness and video conferencing services.",
            "url": "https://www.theverge.com/2022/1/14/22883412/google-tv-2022-new-features-smart-home-fitness-video-conferencing-free-live-channels",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ym6CO186qp_dgmDURVWyxF2fsKw=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21924542/DSCF2108.jpg",
            "publishedAt": "2022-01-14T10:50:15Z",
            "content": "With hopes the services Netflix support will improve\r\nGoogles 2020 Chromecast with Google TV.\r\nPhoto by Chris Welch / The Verge\r\nGoogle TVs director of product management Rob Caruso has outlined what… [+2208 chars]"
        },
    
        {
            
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew Marino",
            "title": "Vergecast: Wordles App Store clones, FTCs Meta lawsuit moves forward, and PCs big year",
            "description": "This weeks Vergecast covers the success and inevitable competition of puzzle game Wordle, what happens next with the FTCs Meta lawsuit, and this weeks gadget news.",
            "url": "https://www.theverge.com/2022/1/14/22883590/vergecast-podcast-481-wordle-clones-ftc-antitrust-lawsuit-proceeds-pc-market-growth",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/7cGL1BKIdAagiP-IhFPtZP-rQak=/0x186:1125x775/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23161508/IMG_3651.jpg",
            "publishedAt": "2022-01-14T15:57:22Z",
            "content": "Every Friday, The Verge publishes our flagship podcast, The Vergecast, where we discuss the week in tech news with the reporters and editors covering the biggest stories.\nThis week on The Vergecast, … [+3381 chars]"
        },
        
        {
            
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Maddie Stone",
            "title": "Clean energy tech needs to be designed for recycling, experts say",
            "description": "Batteries, solar panels, and wind turbines are designed for durability but are often hard to take apart at end of life. To improve recycling, researchers suggest industries move toward new types of adhesives and modular designs.",
            "url": "https://www.theverge.com/22882287/clean-energy-tech-design-recycling",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/3bqEKel7jfSRRUXl2k1N9b5TXWA=/0x483:5020x3111/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23166714/1237396065.jpg",
            "publishedAt": "2022-01-14T16:00:00Z",
            "content": "Too many adhesives impede disassembly today\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nPhoto by Patrick Pleul/picture alliance via Getty Imag… [+7008 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Phillip Tracy",
            "title": "Apple's Plan to Bring MagSafe to the iPad Pro Might Be Cracking",
            "description": "The next iPad Pro might not get MagSafe charging after all. Various rumors indicated Apple would bring the wireless magnetic charging feature to this year’s flagship high-end tablet, however, a new report claims those plans might have been scrapped.Read more.…",
            "url": "https://gizmodo.com/apples-plan-to-bring-magsafe-to-the-ipad-pro-might-be-c-1848362207",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0ed32965ce19627785cb93f1301d56f8.jpg",
            "publishedAt": "2022-01-14T19:30:00Z",
            "content": "The next iPad Pro might not get MagSafe charging after all. Various rumors indicated Apple would bring the wireless magnetic charging feature to this years flagship high-end tablet, however, a new re… [+2638 chars]"
        },
        
        {
            
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Kyle Orland",
            "title": "PUBG maker sues mobile clone, Apple, Google for copyright infringement",
            "description": "Free Fire does look awfully familiar, right down to the frying pan.",
            "url": "https://arstechnica.com/gaming/2022/01/pubg-maker-sues-mobile-clone-apple-google-for-copyright-infringement/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/01/Screen-Shot-2022-01-14-at-11.48.11-AM-760x380.png",
            "publishedAt": "2022-01-14T17:45:28Z",
            "content": "Enlarge/ Screenshot comparisons like these do make Free Fire look very similar to PUBG.\r\n2 with 2 posters participating\r\nShortly after the 2017 release of PlayerUnknown's Battlegrounds (PUBG), creato… [+2984 chars]"
        },
        
        {
            
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Futures slip after mixed results from big banks - Reuters",
            "description": "U.S. stock index futures edged lower on Friday as big lenders including JPMorgan and Wells Fargo kicked off the fourth-quarter earnings season with a mixed batch of results, while big technology companies extended declines after a bruising selloff.",
            "url": "https://www.reuters.com/business/futures-slip-after-mixed-results-big-banks-2022-01-14/",
            "urlToImage": "https://www.reuters.com/resizer/ld5MbChNyYip4tm3xle4Tj_RfRk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2P6DQCKEXBII7AZZ5XGMXHMIZE.jpg",
            "publishedAt": "2022-01-14T12:43:00Z",
            "content": "Jan 14 (Reuters) - U.S. stock index futures edged lower on Friday as big lenders including JPMorgan and Wells Fargo kicked off the fourth-quarter earnings season with a mixed batch of results, while … [+2265 chars]"
        },
        
        {
            
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EXCLUSIVE Netflix raises monthly subscription prices in U.S., Canada - Reuters",
            "description": "Netflix Inc has raised its monthly subscription price by $1 to $2 per month in the United States depending on the plan, the company said on Friday, to help pay for new programming to compete in the crowded streaming TV market.",
            "url": "https://www.reuters.com/technology/exclusive-netflix-raises-monthly-subscription-prices-us-canada-2022-01-14/",
            "urlToImage": "https://www.reuters.com/resizer/964byZA49J78sroymK2u62BDKO4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HXC2YZX3DZNI7JLSLZ55RXMGGI.jpg",
            "publishedAt": "2022-01-14T20:02:00Z",
            "content": "LOS ANGELES, Jan 14 (Reuters) - Netflix Inc has raised its monthly subscription price by $1 to $2 per month in the United States depending on the plan, the company said on Friday, to help pay for new… [+2608 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Derrek Lee",
            "title": "Our readers think Apple should bring RCS support to iMessage",
            "description": "Apple can keep its precious iMessage exclusive to iPhone.\n\nWhat you need to know\n\n\nWe asked our readers if they would like iMessage on Android or RCS support for iPhones.\n76.5% think Apple should adopt RCS support in iMessage.\nRemaining votes are in favor of …",
            "url": "https://www.androidcentral.com/apple-should-bring-rcs-support-imessage",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2022/01/apple-android-rcs-imessage-conversation.jpg",
            "publishedAt": "2022-01-14T18:39:45Z",
            "content": "Apple's iMessage has been a hot topic once again in the Android space after the company was called out for using its messaging app as a \"bullying\" tactic. Google exec Hiroshi Lockheimer once again in… [+2327 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Christine Persaud",
            "title": "Can you use a Samsung Galaxy Watch 4 or Watch 4 Classic with an iPhone?",
            "description": "Best answer: No, the Galaxy Watch 4 and Watch 4 Classic are not compatible with an iPhone. Since Samsug switched to the Google-based Wear OS from Tizen, it needs to connect to an Android-powered smartphone in order to work.\n\nWhat are the Galaxy Watch 4 and Wa…",
            "url": "https://www.androidcentral.com/are-samsung-galaxy-watch-4-and-watch-4-classic-compatible-iphone",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/08/samsung-galaxy-watch-4-review-13.jpg",
            "publishedAt": "2022-01-14T16:30:02Z",
            "content": "Source: Daniel Bader / Android Central\r\nBest answer: No, the Galaxy Watch 4 and Watch 4 Classic are not compatible with an iPhone. Since Samsug switched to the Google-based Wear OS from Tizen, it nee… [+3967 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Mark Sweney",
            "title": "Currys sales slide amid shortages of key tech goods",
            "description": "Profit forecast cut as Christmas supply problems hit products including PlayStation 5 Currys has trimmed its annual profit forecast after a shortage of goods ranging from PlayStation 5 consoles and Apple products to hairdryers resulted in a 5% fall in sales o…",
            "url": "https://amp.theguardian.com/business/2022/jan/14/currys-sales-slide-amid-shortages-of-key-tech-goods",
            "urlToImage": "https://i.guim.co.uk/img/media/1ead8c412a39945c017a64044882371e32c2865f/239_115_2226_1335/master/2226.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a8a52667827791f227d7efa5f2c9bbe9",
            "publishedAt": "2022-01-14T09:38:50Z",
            "content": "Currys has trimmed its annual profit forecast after a shortage of goods ranging from PlayStation 5 consoles and Apple products to hairdryers resulted in a 5% fall in sales over the peak Christmas per… [+3028 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Phil Harrison",
            "title": "From Ozark to Puppet Master: the seven best shows to stream this week",
            "description": "Jason Bateman and Laura Linney are back with the final season of the money-laundering thriller, while a Netflix true-crime documentary profiles a Derbyshire fraudster who pretended to be from MI5 Continue reading...",
            "url": "https://amp.theguardian.com/tv-and-radio/2022/jan/14/from-ozark-to-puppet-master-the-seven-best-shows-to-stream-this-week",
            "urlToImage": "https://i.guim.co.uk/img/media/5c4609b3efccfc711166df37c9046dd7d31a73c8/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4ec00ec9624f1eedf159eadbb18d586c",
            "publishedAt": "2022-01-14T07:00:03Z",
            "content": "Pick of the week\r\nOzark\r\nJason Bateman and Laura Linney in Ozark. Photograph: Netflix\r\nIt is the first episode of this tense rural money-laundering thrillers final season, and the opening scene epito… [+4673 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jonathan Horn (now) and Tanya Aldred (later)",
            "title": "Ashes 2021-22 fifth Test, day one: Australia v England live!",
            "description": "<ul><li>Play in the day-night Test starts at 3pm in Hobart, 4am GMT</li><li>The Spin: subscribe to our weekly cricket newsletter</li><li>Any thoughts? Feel free to email Jonathan </li></ul>Holy heck! Every half-decent seamer from Hobart to Hull just started s…",
            "url": "https://www.theguardian.com/sport/live/2022/jan/14/ashes-2021-22-australia-vs-england-day-one-1-cricket-5th-fifth-test-live-score-card-aus-v-eng-start-time-latest-updates",
            "urlToImage": "https://i.guim.co.uk/img/media/d1ebfd4b00fe0a48f1a45193626cbad17157ea3e/0_79_3801_2282/master/3801.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=621d9cdcb39ec2bab5667a0ba4385bbf",
            "publishedAt": "2022-01-14T03:20:56Z",
            "content": "Hello all, and welcome to our over-by-over coverage of the opening day of the fifth Ashes Test. Weather permitting, and it rarely permits in this part of Australia, play kicks off in Hobart at 3pm lo… [+1293 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Henry Wong, Jack Seale, Hollie Richardson, Hannah Verdier and Simon Wardell",
            "title": "TV tonight: the man who pioneered rock roll takes centre stage",
            "description": "Exploring Fats Dominos life and legacy in an electrifying documentary. Plus a look at Mae West, who was once Hollywoods biggest star. Heres what to watch this evening Continue reading...",
            "url": "https://amp.theguardian.com/tv-and-radio/2022/jan/14/tv-tonight-the-man-who-pioneered-rocknroll-takes-centre-stage",
            "urlToImage": "https://i.guim.co.uk/img/media/f4bd3d272cebdd9f0ca2da8badeda9674c9fbc1b/605_296_4606_2764/master/4606.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b5eec93dabe30156e9651f9ae56ac634",
            "publishedAt": "2022-01-14T09:07:14Z",
            "content": "The Big Beat: Fats Domino and the Birth of RocknRoll\r\nSky Arts, 9pm\r\nDuring his lifetime, Fats Domino not only sold millions of records but pioneered a new genre: rocknroll. With his signature mix of… [+4008 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Adrian Horton",
            "title": "Somebody Somewhere review  Bridget Everett anchors endearing comedy",
            "description": "The ribald stage star is magnetic in an understated coming-of-middle-age series about a woman trying to piece her life together after lossSomebody Somewhere, a spiky and endearing seven-part HBO series created by and starring the comedian, actor and singer …",
            "url": "https://amp.theguardian.com/tv-and-radio/2022/jan/14/somebody-somewhere-review-bridget-everett-anchors-endearing-comedy",
            "urlToImage": "https://i.guim.co.uk/img/media/a8a51759d3e15dbf7d61ffb69511465bb66f2647/0_18_1920_1152/master/1920.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=4cf4c560bb1bf874bbeaea6d545a79c9",
            "publishedAt": "2022-01-14T07:02:03Z",
            "content": "Somebody Somewhere, a spiky and endearing seven-part HBO series created by and starring the comedian, actor and singer Bridget Everett, begins in the quiet aftermath of loss. Sam, a 40-something woma… [+4780 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tony Naylor",
            "title": "How to eat: cookies",
            "description": "This month, How to Eat is considering cookies. Can you ever dunk them? Why would you marry them with ice-cream? And is marshmallow, white chocolate or Twix the worst thing you can embed in this beast of a biscuit?This month, How to Eat the series exploring …",
            "url": "https://amp.theguardian.com/food/2022/jan/14/how-to-eat-cookies",
            "urlToImage": "https://i.guim.co.uk/img/media/a950e0780a53e23aaf6ed48da83b10cd1a57cf2d/0_187_5616_3370/master/5616.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b0873f6ee887f66b88074c36b446fc26",
            "publishedAt": "2022-01-14T11:00:07Z",
            "content": "This month, How to Eat the series exploring the best way to enjoy Britains favourite foods must start by making a full and frank public apology.\r\nIn 2013, HTE declared that (trigger warning: rank stu… [+8791 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "Apple AR/VR Headset Potentially Delayed Until 2023 Amid Development Problems",
            "description": "Apple's long-rumored AR/VR headset could be delayed until 2023 after being beset with issues during the development process, according to Bloomberg.\n\n\n\nConcept render based on purported leaked information by Ian Zelbo\n\nCiting people familiar with Apple's plan…",
            "url": "https://www.macrumors.com/2022/01/14/apple-headset-delayed-until-2023/",
            "urlToImage": "https://images.macrumors.com/t/1ZjGCy9t65PxnQjt09BL_o6oGLg=/3840x/article-new/2021/12/apple-ar-headset-concept-1.jpeg",
            "publishedAt": "2022-01-14T16:10:47Z",
            "content": "Apple's long-rumored AR/VR headset could be delayed until 2023 after being beset with issues during the development process, according to Bloomberg.\r\nCiting people familiar with Apple's plans, the re… [+1741 chars]"
        },
        
        {
            
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Developers Now Able to Submit Claims for $250 to $30,000 Payments From Apple in Lawsuit Settlement",
            "description": "Apple in August announced plans to pay $100 million to settle a class-action lawsuit levied by U.S. developers, and as of today, the website that will allow developers to submit a claim for a payout has gone live.\n\n\n\n\n\nThe $100 million that Apple provided is …",
            "url": "https://www.macrumors.com/2022/01/14/developers-app-store-lawsuit-claim-submissions/",
            "urlToImage": "https://images.macrumors.com/t/Z4nU2dRocDnr4NPvf-sGNedmPGA=/2250x/article-new/2022/01/iOS-App-Store-General-Feature-JoeBlue.jpg",
            "publishedAt": "2022-01-14T20:24:27Z",
            "content": "Apple in August announced plans to pay $100 million to settle a class-action lawsuit levied by U.S. developers, and as of today, the website that will allow developers to submit a claim for a payout … [+2536 chars]"
        }
    ]

    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    render() {
        return (
            <>
            <div className="container my-3 d-flex justify-content-center ">
                    <h2 className="font-weight-bold display-4">Today's Headlines</h2>
            </div>

            <div className="row" >
                
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4 d-flex justify-content-center" key={element.url}>
                    <NewsItem title={element.title.slice(0,60)} description={element.description.slice(0,140)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                
            </div>
            </>
        )
    }
}

export default News