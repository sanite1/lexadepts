import pract1 from "../assets/images/corp-com.jpg";
import pract2 from "../assets/images/bigPract2.png";
import pract3 from "../assets/images/risk.jpg";
import pract4 from "../assets/images/bigPract40.png";
import pract5 from "../assets/images/intellect.jpg";

const PracticeAreaData = [
  {
    id: 1,
    md: 1,
    xs: 2,
    image: pract1,
    name: "Corporate and Commercial Law",
    desc: "Our Corporate and Commercial Practice Group provides general corporate advisory  services to national and international corporations operating in the Nigerian economy. At  the core of our Corporate and Commercial practice is our ability to provide pragmatic and  inventive business solutions to our clients for the effective implementation of their  business goals.",
  },
  {
    id: 2,
    md: 2,
    xs: 1,
    image: pract2,
    name: "Finance and Policy Law",
    desc: "Our Financial Law Practice consists of a carefully selected group of legal practitioners with  excellent academic qualifications and international exposure. This includes specialist  experience in the diverse elements of finance and financial services law including  corporate finance, project finance, real estate finance, structured finance, and  infrastructure finance. We adopt a practical and commercial approach to solving  problems, and utilizing these are able to deliver a cutting-edge service to our clients.",
  },
  {
    id: 3,
    md: 1,
    xs: 2,
    image: pract3,
    name: "Corporate Governance, Risk and Compliance",
    desc: "Corporate Governance, risk and compliance principles have recently been articulated as  an integrated collection of all capabilities to ensure that organizations reliably achieve  objectives, address uncertainty and act with integrity. Our advisory services in this field  encompass several statutory and regulatory frameworks, global standards as well as  foreign investment regulations. We also advise on global standards affecting or applicable  to businesses such as ethics and compliance frameworks, standards and global best  practice. The CGRC services we offer include:",
    bulletPoints: [
      "Compliance Programs",
      "Corporate Governance",
      "Business Ethics",
      "Regulatory Compliance",
    ],
  },
  {
    id: 4,
    md: 2,
    xs: 1,
    image: pract4,
    name: "Real Estate – Property Law",
    desc: "We represent private and institutional investors, property owners, developers, and  financiers in a broad spectrum of transactions such as:",
    bulletPoints: [
      "Facilitating real estate development plans",
      "Perfecting title to real estate",
      "Acquisition of Landed properties either by Lease or Purchase",
      "Property management",
      "Ensuring regulatory and permit compliance with pertinent laws and authorities",
      " Drafting and negotiating real estate contracts and other conveyance documents",
    ],
  },
  {
    id: 5,
    md: 1,
    xs: 2,
    image: pract5,
    name: "Intellectual Property Law",
    desc: "At Lex Adepts, we recognize that your concepts, ideas, innovations, brand names, and brand  elements are valuable assets that require protection. We offer unparalleled expertise in  intellectual property (IP) advisory and portfolio management, serving both traditional and  contemporary businesses, including entertainment industries. Our services include advising on  patents, copyrights, trademarks, product development, licensing, and the acquisition and transfer  of technology. We ensure that creators and inventors can secure exclusive rights to their  creations, fostering innovation and creativity.  Key areas include;",
    bulletPoints: [
      "Patents - which protect new inventions",
      "Trademarks - safeguarding brand identities",
      "Copyrights - covering artistic and literary works",
      "Trade secrets - which protect confidential business information",
    ],
  },
];

export default PracticeAreaData;
