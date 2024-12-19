import PLANET_CARD_HERO from '@/assets/images/Portfolio/Planet/fitness.png'
import EDTECH_CARD_HERO from '@/assets/images/Portfolio/Nextgen/education.png'
import HEALTHCARE from '@/assets/images/Portfolio/healthCare.png'
import ECOM1 from '@/assets/images/Portfolio/ecomm.png'
import ENTER from '@/assets/images/Portfolio/Bossalabs/party.png'
import DkarePrimaryImage from '@/assets/images/Portfolio/D-kare/D_HOME.webp'
import Dkare2 from '@/assets/images/Portfolio/D-kare/D2.png'
import N1 from '@/assets/images/Portfolio/Nextgen/n1.png'
import N2 from '@/assets/images/Portfolio/Nextgen/n2.png'
import N3 from '@/assets/images/Portfolio/Nextgen/n3.png'
import N4 from '@/assets/images/Portfolio/Nextgen/n4.png'
import N5 from '@/assets/images/Portfolio/Nextgen/n5.png'
import GROUP3 from '@/assets/images/Portfolio/Bossalabs/Group3.png'
import GROUP4 from '@/assets/images/Portfolio/Bossalabs/Group4.png'
import GROUP5 from '@/assets/images/Portfolio/Bossalabs/Group5.png'
import CHURCH from '@/assets/images/Portfolio/church.png'
import CHURCH1 from '@/assets/images/Portfolio/church1.png'
import CHURCH2 from '@/assets/images/Portfolio/church2.png'
import CHURCH3 from '@/assets/images/Portfolio/church3.png'
import CHURCH4 from '@/assets/images/Portfolio/church4.png'
import CHURCH5 from '@/assets/images/Portfolio/church5.png'
import PHYSIO1 from '@/assets/images/Portfolio/physio-cafe/P1.png'
import PHYSIO2 from '@/assets/images/Portfolio/physio-cafe/P2.png'
import PHYSIO3 from '@/assets/images/Portfolio/physio-cafe/P3.png'
import PHYSIO4 from '@/assets/images/Portfolio/physio-cafe/P4.png'
import PHYSIO5 from '@/assets/images/Portfolio/physio-cafe/P5.png'

import bepop from '@/assets/images/Portfolio/Bepop/bepop.png'
import bepop2 from '@/assets/images/Portfolio/Bepop/bepop2.png'
import bepop3 from '@/assets/images/Portfolio/Bepop/bepop3.png'
import bepop4 from '@/assets/images/Portfolio/Bepop/bepop4.png'
import bepop5 from '@/assets/images/Portfolio/Bepop/bepop5.png'

export const case_study_data = [
  {
    name: 'Entertainment',
    details: {
      img: ENTER,
      alt: 'enter',
      tag: 'Entertainment',
      title: 'A Smart Cutting board with live classes firmware',
      tech_tag: ['React', 'Python', 'Django', 'Metrial UI'],
      pathname: 'bossalabs',
      description:
        'Planet Fitness is the perfect fitness ally for your wellness journey. Track your heart rate, sleep patterns, and stress levels with ease. Get personalized workout plans tailored to your goals and preferences. Monitor your nutrition and calorie intake effortlessly.',
    },
    isSelected: false,
  },
  {
    name: 'Ed-tech',
    details: {
      img: EDTECH_CARD_HERO,
      alt: 'edtech card hero',
      tag: 'Ed-tech',
      title: 'Level up your coding skills with nextgen tutorial',
      tech_tag: ['React', 'Python', 'Django'],
      pathname: 'nextgen',
      description:
        'Nextgen Tutorial is an innovative freemium educational website, dedicated to providing a comprehensive and interactive platform for learning coding and web development',
    },
    isSelected: false,
  },
  {
    name: 'E-commerce',
    details: {
      img: ECOM1,
      alt: 'ecom1',
      tag: 'E-commerce',
      title: 'Nourish your life naturally - D-kare',
      tech_tag: ['Next', 'Node'],
      pathname: 'd-kare',
      description:
        'D-Kare is a prominent herbal e-commerce online store, renowned for its diverse range of unadulterated juices, flavorful drinks, wellness products, beauty products, hair care, herbal oils, and other offerings',
    },
    isSelected: false,
  },
  {
    name: 'Church Managment System',
    details: {
      img: CHURCH,
      alt: 'church',
      tag: 'Communication',
      title: 'Church Managment System',
      tech_tag: ['React', 'PHP'],
      pathname: 'text-in-church',
      description:
        "Text In Church transformed the Church Community Builder project, seamlessly addressing communication challenges. With automated workflows and user-friendly features, it led to increased attendance, deeper relationships, and improved engagement. This integration streamlined operations, optimizing overall performance and contributing to the project's success.",
    },
    isSelected: false,
  },

  {
    name: 'Healthcare & Wellness',
    details: {
      img: HEALTHCARE,
      alt: 'healthcare',
      tag: 'Healthcare & Wellness',
      title: 'Crafting a Healthier Tomorrow for You - PhysioCafe',
      tech_tag: ['React', 'Node'],
      pathname: 'physiocafe',
      description:
        "In response to the challenges within the healthcare system, PhysioCafe emerged with a mission to streamline doctor appointments and enhance doctor-patient relationships. Focused on optimizing appointment scheduling, ensuring data security, and creating user-friendly interfaces, PhysioCafe's dedicated team successfully delivered a groundbreaking web app.",
    },
    isSelected: false,
  },
  {
    name: 'Entertainment',
    details: {
      img: bepop,
      alt: 'enter',
      tag: 'Entertainment',
      title: 'Connecting Creatives with Work',
      tech_tag: ['JAvascript', 'next.js', 'aws', 'Mongodb'],
      pathname: 'bepop',
      description:
        "Bepop is a website that connects freelance creative professionals with employers. It allows employers to browse profiles and post opportunities, while creatives can create profiles and apply for jobs. In short, it's a platform for creative freelancers to find work. Bepop’s main goal was to create a community engagement platform that recognized creative people's preferences and paired the appropriate creatives with the job. Easy-to-use features were also included so that job posters could effortlessly find the right person.",
    },
    isSelected: false,
  },
]

export const caseStudy_list = [
  {
    brand: 'd-kare',
    hero: {
      title: 'NOURISH YOUR LIFE, NATURALLY - D KARE',
      description:
        'D-Kare is a prominent herbal e-commerce online store, renowned for its diverse range of unadulterated juices, flavorful drinks, wellness products, beauty products, hair care, herbal oils, and other offerings.',
      industry_type: 'Wellness',
      img: DkarePrimaryImage,
    },
    backStory: {
      id: 1,
      title: 'Backstory',
      img: Dkare2,
      description: [
        'With a growing customer base and changing market trends, D-Kare embraced digital transformation to reach a wider audience and offer a convenient shopping experience.',
        'The software development project aimed to align their e-commerce platform with their mission of promoting balance and wellness through natural products. Agile methodologies and collaboration were key to success.',
      ],
    },
    challange: {
      id: 2,
      title: 'Challange',
      img: Dkare2,
      description: [
        "The lack of online accessibility may have hindered D-Kare's ability to keep up with changing market trends and consumer preferences, potentially affecting their competitiveness in the industry.",
        'The absence of an online presence limited their reach, making it challenging to tap into a broader customer base beyond their local markets.',
      ],
    },
    solution: {
      id: 3,
      title: 'Solution',
      img: Dkare2,
      description: [
        'To address the growing customer base and changing market trends, D-Kare adopted digital transformation, creating a user-friendly e-commerce platform.',
        'Agile methodologies and collaboration ensured successful development, aligning with their mission of promoting balance and wellness through natural products. The platform integrated with existing systems, prioritized data security, and embraced customer feedback for continuous improvement.',
      ],
    },
    result: {
      id: 4,
      title: 'Result',
      img: Dkare2,
      description: [
        '35% increase in website traffic within the first three months of its launch.',
        '50% increase in new customer registrations compared to the same period in the previous year.',
        "60% increase in online sales, demonstrating the platform's effectiveness in converting website visitors into paying customers.",
        '30% increase in brand searches and mentions on social media',
        "As a result of the platform's success, D-Kare's overall revenue witnessed a significant surge of 45% in the first year of its implementation.",
      ],
    },
  },
  {
    brand: 'nextgen',
    hero: {
      title: 'LEVEL UP YOUR CODING SKILLS WITH NEXTGEN TUTORIAL!',
      description:
        'Nextgen Tutorial is an innovative freemium educational website, dedicated to providing a comprehensive and interactive platform for learning coding and web development.',
      industry_type: 'Online Learning Platform',
      img: N1,
    },
    backStory: {
      id: 1,
      title: 'Backstory',
      img: N2,
      description: [
        'Nextgen Tutorial was developed to address the growing demand for accessible and practical coding education. The goal was to create an innovative platform that caters to learners of all levels, from beginners to experts, and empowers them with the knowledge and skills needed in the dynamic world of web development.',
        'Nextgen Tutorial aims to democratize coding education and provide learners with a seamless and enriching learning experience in the field of web development.',
      ],
    },
    challange: {
      id: 2,
      title: 'Challange',
      img: N3,
      description: [
        'Prevously Nextgen tutorial primarily operated as a traditional brick-and-mortar educational institute. Learners were limited to physical classrooms, and access to courses was restricted to the local area.',
        "The learning experience lacked flexibility, as fixed schedules and limited course offerings constrained learners' choices.",
      ],
    },
    solution: {
      id: 3,
      title: 'Solution',
      img: N4,
      description: [
        'Nextgen Tutorial addressed the limitations of traditional education by implementing an innovative e-learning platform.',
        'Learners now have access to a flexible, global, and personalized learning experience, breaking free from the constraints of physical classrooms and fixed schedules.',
      ],
    },
    result: {
      id: 4,
      title: 'Result',
      img: N5,
      description: [
        '42% increase in user engagement',
        '28% more time spending on an average on the platform.',
        '6% growth in its user base',
        'Reached over 50 countries, with a 67% increase in international learners',
      ],
    },
  },
  {
    brand: 'bossalabs',
    hero: {
      title: 'ELEVATE YOUR FITNESS GAME - PLANET FITNESS',
      description:
        'Planet Fitness is the perfect fitness ally for your wellness journey. Track your heart rate, sleep patterns, and stress levels with ease. Get personalized workout plans tailored to your goals and preferences. Monitor your nutrition and calorie intake effortlessly.',
      industry_type: 'Entertainment',
      img: GROUP3,
    },
    backStory: {
      id: 1,
      title: 'Backstory',
      img: GROUP4,
      description: [
        'Creating Planet Fitness presented formidable hurdles, including integrating advanced biometric tracking, ensuring data privacy, personalizing workout plans, fostering user engagement, and constantly iterating based on user feedback.',
        "Yet, the team's unwavering dedication and shared commitment led to the successful launch of an app that revolutionized fitness and wellness.",
      ],
    },
    challange: {
      id: 2,
      title: 'Challange',
      img: GROUP5,
      description: [
        'The user lacks real-time monitoring of their physical activity and health metrics, making it challenging to track progress and set achievable goals.',
        'Additionally, without access to personalized workout plans and community support, the user might struggle to stay motivated and maintain a consistent fitness regimen.',
      ],
    },
    solution: {
      id: 3,
      title: 'Solution',
      img: GROUP3,
      description: [
        'Planet Fitness app addressed real-time monitoring limitations with advanced fitness tracking, wearable device integration. Users accessed accurate metrics, tracked progress, set goals, and made data-driven decisions.',
        'Seamless compatibility enhanced user experience, fostering motivation and commitment to health goals.',
      ],
    },
    result: {
      id: 4,
      title: 'Result',
      img: GROUP4,
      description: [
        '13% decrease in resting heart rate',
        '22% improvement in sleep quality',
        '62% of app users reported achieving their fitness goals',
        'Users engaged in challenges and social interactions within the app, leading to a 40% increase in user retention over the past year.',
      ],
    },
  },
  {
    brand: 'physiocafe',
    hero: {
      title: 'Crafting a Healthier Tomorrow for You - PhysioCafe',
      description:
        "In response to the challenges within the healthcare system, PhysioCafe emerged with a mission to streamline doctor appointments and enhance doctor-patient relationships. Focused on optimizing appointment scheduling, ensuring data security, and creating user-friendly interfaces, PhysioCafe's dedicated team successfully delivered a groundbreaking web app.",
      industry_type: 'Healthcare',
      img: PHYSIO5,
    },
    backStory: {
      id: 1,
      title: 'Backstory',
      img: PHYSIO1,
      description: [
        'The inception of PhysioCafe stemmed from the need to address challenges within the healthcare system, specifically in managing doctor appointments and improving doctor-patient relationships. With a vision to streamline the appointment process and enhance communication between healthcare providers and patients, PhysioCafe was conceived.',
        'Creating a comprehensive Doctor Appointment and Doctors-Patient Management Web App presented multifaceted challenges. These challenges included optimizing appointment scheduling, ensuring data security and privacy, and creating a user-friendly interface for both doctors and patients. The team at PhysioCafe, driven by a shared commitment to improving healthcare accessibility, successfully navigated these challenges and launched a groundbreaking web app.',
      ],
    },
    challange: {
      id: 2,
      title: 'Challange',
      img: PHYSIO2,
      description: [
        'The traditional healthcare appointment system often leads to inefficiencies, long waiting times, and difficulty in managing patient information. Lack of effective communication channels between doctors and patients further exacerbates these issues. PhysioCafe aimed to revolutionize this by creating a web app that streamlines the appointment process, facilitates better communication, and improves overall doctor-patient management.',
        'TECHNOLOGIES OFFERED',
        'Cutting-edge appointment scheduling algorithms',
        'Secure patient data management system',
        'User-friendly interface for doctors and patients',
      ],
    },
    solution: {
      id: 3,
      title: 'Solution',
      img: PHYSIO3,
      description: [
        'PhysioCafe addressed the challenges by implementing advanced appointment scheduling algorithms, ensuring secure and compliant data management, and creating an intuitive interface. The web app allowed patients to easily schedule appointments, receive timely reminders, and provide essential health information beforehand.',
        'Doctors benefited from a centralized platform for managing appointments, accessing patient records securely, and maintaining effective communication. The inclusion of telemedicine features further enhanced the accessibility of healthcare services.',
      ],
    },
    result: {
      id: 4,
      title: 'Result',
      img: PHYSIO4,
      description: [
        '25% reduction in appointment wait times',
        '30% improvement in overall patient satisfaction',
        '45% increase in the efficiency of doctor-patient communication',
        '90% of doctors reported improved ease of managing appointments and patient information',
      ],
    },
  },
  {
    brand: 'text-in-church',
    hero: {
      title: 'Church management system',
      description:
        "Text In Church transformed the Church Community Builder project, seamlessly addressing communication challenges. With automated workflows and user-friendly features, it led to increased attendance, deeper relationships, and improved engagement. This integration streamlined operations, optimizing overall performance and contributing to the project's success.",
      industry_type: 'Chuch',
      img: CHURCH1,
    },
    backStory: {
      id: 1,
      title: 'Backstory',
      img: CHURCH2,
      description: [
        'The Church Community Builder project embarked on a journey to redefine communication within the church community.',
        'Despite adopting cutting-edge technologies like React.js, Redux, HTML, CSS, Bootstrap, and Git, the project recognized the need for a specialized communication tool. This led to the integration of Text In Church, a platform designed to elevate church engagement to new heights.',
      ],
    },
    challange: {
      id: 2,
      title: 'Challange',
      img: CHURCH3,
      description: [
        'The Church Community Builder project faced challenges in establishing seamless communication channels and maintaining consistent connectivity.',
        'Traditional methods fell short, demanding a solution that could automate workflows, integrate with other management tools, and enhance user engagement.',
      ],
    },
    solution: {
      id: 3,
      title: 'Solution',
      img: CHURCH4,
      description: [
        'Text In Church seamlessly addressed these challenges, offering a range of features tailored to enhance communication within the church',
        'Automated Messaging Workflows',
        'Welcome Messages: Automated greetings for newcomers, providing a warm introduction to the church community. Event Reminders: Timely notifications about upcoming events, boosting attendance and participation. Sermon Follow-ups: Automated messages post-sermons, promoting continuous engagement and reflection.',
      ],
    },
    result: {
      id: 4,
      title: 'Result',
      img: CHURCH5,
      description: [
        'Achieved a 23% surge with timely reminders and personalized engagement.',
        'Realized a 37% increase in consistent communication among leaders and members.',
        'Enhanced efficiency by 45% through real-time messaging and event follow-ups.',
        "Boosted interaction by 31% with Text In Church's reviews and ratings.",
        'Reduced manual efforts by 27% through seamless integrations.',
        'Improved platform performance by 33% with analytics and reporting tools.',
      ],
    },
  },
  {
    brand: 'bepop',
    hero: {
      title: 'How Bepop Tapped Into The Job Market With Technithunder: Connecting Creatives with Work',
      description:
        "Bepop is a website that connects freelance creative professionals with employers. It allows employers to browse profiles and post opportunities, while creatives can create profiles and apply for jobs. In short, it's a platform for creative freelancers to find work.",
      industry_type: 'Entertainment',
      img: bepop2,
    },
    backStory: {
      id: 1,
      title: 'Backstory',
      img: bepop3,
      description: [
        'A community building enthusiast was hit by frustration again. Another rejection email. All that design work, wasted? Friends in tech got jobs easy with websites like LinkedIn. Why not something for creative people?',
        'A place where people who hire see your unique style, not just words on a page. A place to show off your work the way you want.',
        "This wasn't just one person's problem. Designers, photographers, everyone creative - they all felt it. No good platform, just a big empty space.",
      ],
    },
    challange: {
      id: 2,
      title: 'Challange',
      img: bepop4,
      description: [
        "Found it difficult to hire creators: They wanted to attract lots of creative folks to Bepop, but they initially relied on a no-code platform to build it. This was like trying to build a cool website with only building blocks - it wasn't powerful enough to handle the growth they envisioned.",
        'Wanted Easy to Navigate Features: Bepop needed to be clear and simple for both creative minds and those looking to hire them. Imagine a user-friendly website, not a confusing maze!',
        'Wanted Real People, Real Profiles: Bepop wanted to make sure everyone on the platform was genuine, not fakes. No one wants to search through a bunch of made-up profiles!',
      ],
    },
    solution: {
      id: 3,
      title: 'Solution',
      img: bepop5,
      description: [
        'To address the growing customer base and changing market trends, D-Kare adopted digital transformation, creating a user-friendly e-commerce platform.',
        'Agile methodologies and collaboration ensured successful development, aligning with their mission of promoting balance and wellness through natural products. The platform integrated with existing systems, prioritized data security, and embraced customer feedback for continuous improvement.',
      ],
    },
    result: {
      id: 4,
      title: 'Result',
      img: bepop2,
      description: [
        'Talent Acquisition: We incorporated casting call functionality, streamlining the process for employers to identify and connect with suitable creative talent.',
        'Enhanced Communication: We integrated messaging and communication platforms to facilitate seamless collaboration and information exchange between creatives and potential employers.',
        'Bepop facilitates the creation of filtered jobs between creative individuals who share similar interests. Individuals are categorized according to their interests and preferences. The platform is simple to use, fostering proactive discussions and providing creative participants with experiences.',
      ],
    },
  },
]

export const technology_1 = ['JavaScript', 'TypeScript', 'React JS', 'Next JS', 'Node JS']
