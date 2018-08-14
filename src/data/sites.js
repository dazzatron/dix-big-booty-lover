// images
import aig from '../images/aig.jpg';
import ak from '../images/akbercrombie-kent.jpg';
import cv from '../images/commercial-vehicle.jpg';
import cv2 from '../images/cv2.jpg';
import cv3 from '../images/cv3.jpg';
import fs from '../images/ford-store.jpg';
import fs2 from '../images/fs2.jpg';
import fs3 from '../images/fs3.jpg';
import hw from '../images/hellowall.jpg';
import nl from '../images/noodle-live.png';
import mse from '../images/money-saving-expert.jpg';
import sr from '../images/sanctuary-retreats.jpg';
import adrn from '../images/adrn.jpg';
import icem from '../images/icem.jpg';
import wwg from '../images/wwg.jpg';
import wwg2 from '../images/wwg2.jpg';
import wwg3 from '../images/wwg3.jpg';

export default [{
        id: 0,
        "name": "World Wide Generation",
        "text": "A React driven data visualisation website built in an agile team.",
        "path": "wwg",
        "background": "#35c866",
        "subTitle": "Data visualisation website",
        "images": [wwg, wwg2, wwg3],
        "techs": [{
            label: "React",
            percentage: 100
        }, {
            label: 'Redux',
            percentage: 50
        }, {
            label: "Sass",
            percentage: 80
        }, {
            label: "ES6",
            percentage: 80
        }, {
            label: "D3",
            percentage: 50
        }, {
            label: "Three.js",
            percentage: 25
        }]
    },
    {
        id: 1,
        "name": "AIG",
        "text": "A React driven Insurance quotes system.",
        "path": "aig",
        "background": "#0CA1DE",
        "subTitle": "Quote System",
        "images": [aig],
        "techs": [{
            label: "React",
            percentage: 100
        }, {
            label: "Redux",
            percentage: 50
        }, {
            label: "Sass",
            percentage: 80
        }, {
            label: "Axios",
            percentage: 25
        }, {
            label: "ES6",
            percentage: 50
        }]
    },
    {
        id: 2,
        "name": "Ford Vehicle Configurator",
        "text": "A Commercial Vehicle website, which allows dealers to quickly report the emissions of highly custom vehicles.",
        "path": "ford-vehicle-configurator",
        "background": "#6b645e",
        "subTitle": "Weights/Emissions Calculator",
        "images": [cv, cv2, cv3],
        "techs": [{
            label: "Angular 1",
            percentage: 100
        }, {
            label: "Angular Router",
            percentage: 75
        }, {
            label: "Bootstrap 3",
            percentage: 50
        }, {
            label: "Jquery",
            percentage: 25
        }, {
            label: "Sass",
            percentage: 75
        }, {
            label: "D3",
            percentage: 10
        }]
    },
    {
        id: 3,
        "name": "FordStore Games",
        "text": "A selection of JavaScript based games aimed to entertain customers while they wait in Ford dealerships.",
        "path": "fordstore-games",
        "background": "#5f0000",
        "subTitle": "Interactive Games",
        "images": [fs, fs2, fs3],
        "techs": [{
            label: "React",
            percentage: 90
        }, {
            label: "Redux",
            percentage: 25
        }, {
            label: "ThreeJS",
            percentage: 80
        }, {
            label: "Pixi.js",
            percentage: 60
        }, {
            label: "Phaser.js",
            percentage: 50
        }]
    },
    {
        id: 4,
        "name": "Ford HelloWall",
        //  "url": "https://vimeo.com/108418066",
        "text": "A website that displays content from Social Media in an aesthetic form to customers in the Dealer waiting area.",
        "path": "ford-hellowall",
        "background": "#0b1d67",
        "subTitle": "Welcomes Customers to Dealerships",
        "images": [hw],
        "techs": [{
            label: "HTML5",
            percentage: 80
        }, {
            label: "CSS3",
            percentage: 70
        }, {
            label: "Jquery",
            percentage: 80
        }, {
            label: "Angular 1",
            percentage: 80
        }, {
            label: "JavaScript",
            percentage: 80
        }]
    },
    {
        id: 5,
        "name": "Money Saving Expert",
        "url": "http://www.moneysavingexpert.com",
        "text": "Leading finance information and discussion website.",
        "path": "mse",
        "background": "#283254",
        "subTitle": "Leading British Consumer Website",
        "images": [mse],
        "techs": [{
            label: "HTML5",
            percentage: 100
        }, {
            label: "CSS3",
            percentage: 80
        }, {
            label: "Jquery",
            percentage: 80
        }, {
            label: "Sass",
            percentage: 50
        }, {
            label: "JavaScript",
            percentage: 60
        }]
    },
    {
        id: 6,
        "name": "Noodle Live",
        "url": "http://www.noodlelive.com",
        "text": "Application that allows users to connect to speakers and attendees before, after and during events.",
        "path": "noodle-live",
        "background": "#6f0d00",
        "subTitle": "Events Application",
        "images": [nl],
        "techs": [{
            label: "Mobile Angular UI",
            percentage: 100
        }, {
            label: "Bootstrap 3",
            percentage: 80
        }, {
            label: "Sass",
            percentage: 50
        }, {
            label: "HTML5",
            percentage: 50
        }]
    },
    {
        id: 7,
        "name": "Abercrombie & Kent",
        "url": "http://www.abercrombiekent.co.uk",
        "text": "A complicated holiday booking engine created in Knockout.js",
        "path": "/sites/abercrombie-kent",
        "background": "#ffce00",
        "subTitle": "Booking Luxury Holidays",
        "images": [ak],
        "techs": [{
            label: "Knockout.js",
            percentage: 100
        }, {
            label: "Javascript",
            percentage: 50
        }, {
            label: "Jquery",
            percentage: 66
        }, {
            label: "HTML5",
            percentage: 50
        }, {
            label: "CSS3",
            percentage: 75
        }]
    },
    {
        id: 8,
        "name": "Sanctuary Retreats",
        "url": "http://www.sanctuaryretreats.com",
        "text": "A bespoke holiday website, allowing customers to access award winning trips.",
        "path": "sanctuary-retreats",
        "background": "#611e0b",
        "subTitle": "Luxury holidays website",
        "images": [sr],
        "techs": [{
            label: "HTML5",
            percentage: 80
        }, {
            label: "CSS3",
            percentage: 50
        }, {
            label: "Social Media APIs",
            percentage: 100
        }, {
            label: "Umbraco 4",
            percentage: 75
        }, ]
    },
    {
        id: 9,
        "name": "Icem Data Service",
        "url": "http://icem.data-archive.ac.uk",
        "text": "A website allowing access to a database of over 180 million census records.",
        "path": "",
        "background": "#94183e",
        "subTitle": "",
        "images": [icem],
        "techs": [{
            label: "Angular 1",
            percentage: 100
        }, {
            label: "Sass",
            percentage: 50
        }, {
            label: "Bootstrap 3",
            percentage: 75
        }, {
            label: "Angular Router",
            percentage: 50
        }, {
            label: "Angular UI",
            percentage: 50
        }]
    },
    {
        id: 10,
        "name": "Ford Global IT Seminar",
        "url": "http://www.ford.co.uk",
        "text": "An events application for the Ford Global IT Seminar, to inform staff of events, times and happenings.",
        "path": "ford-glits",
        "background": "#666666",
        "subTitle": "",
        "images": [],
        "techs": [{
            label: "Ionic",
            percentage: 100
        }, {
            label: "Angular 1",
            percentage: 50
        }, {
            label: "Sass",
            percentage: 75
        }]
    },
    {
        id: 11,
        "name": "ADRN",
        "url": "http://www.adrn.ac.uk",
        "text": "The ADRN makes de-identified, linked admin data available for research purposes.",
        "path": "adrn",
        "background": "#58096a",
        "subTitle": "Administrative Data Research Network",
        "images": [adrn],
        "techs": [{
            label: "HTML5",
            percentage: 50
        }, {
            label: "CSS3",
            percentage: 75
        }, {
            label: "Bootstrap 3",
            percentage: 50
        }, {
            label: "Sass",
            percentage: 75
        }, {
            label: "JavaScript",
            percentage: 50
        }, {
            label: "Jquery",
            percentage: 50
        }]
    }
]