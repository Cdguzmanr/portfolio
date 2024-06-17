// Images and Video Import
import noImage from "../../assets/img/noImage.jpg";
import noImage2 from '/noImage.jpg';



export interface Project {
    id: number;
    name: string;
    previewPicture: string;
    videoDemo?: string;
    technologyTag: string;
    description: string;
  }
  
const ProjectsInfo: Project[] = [
    {
        id: 1,
        name: 'Android Travel Companion App',
        previewPicture: '/noImage.jpg',
        videoDemo: '/videoBanner',
        technologyTag: 'Android',
        description: 'This Android Travel Companion App is designed to enhance the travel experience for users by providing a comprehensive suite of features including itinerary management, real-time flight updates, local attraction suggestions, and an integrated expense tracker. The app leverages Google Maps API for precise navigation and location-based services, ensuring travelers have all the information they need at their fingertips. With an intuitive user interface and seamless integration with popular travel services, this app makes travel planning and execution effortless and enjoyable.'
    },
    {
        id: 2,
        name: 'E-Commerce Platform',
        previewPicture: '/noImage.jpg',
        videoDemo: '/videoBanner',
        technologyTag: 'ASP.NET',
        description: 'This ASP.NET E-Commerce Platform is a robust online shopping solution tailored for small to medium-sized businesses. The platform supports a wide range of functionalities, including product management, customer accounts, secure payment processing, and order tracking. Built with scalability in mind, it integrates with various payment gateways and shipping services to provide a smooth and secure shopping experience. The user-friendly admin panel allows store owners to easily manage their inventory, promotions, and customer interactions, making it an ideal choice for businesses looking to establish a strong online presence.',
    },
    {
        id: 3,
        name: 'React Personal Finance Manager',
        previewPicture: '/noImage.jpg',
        videoDemo: '/videoBanner',
        technologyTag: 'React',
        description: 'The React Personal Finance Manager is a powerful web application designed to help users manage their finances efficiently. Featuring an elegant and responsive design, the application allows users to track their income, expenses, and savings goals. Advanced features such as budget creation, financial analytics, and real-time updates provide users with valuable insights into their spending habits. The application is built with a focus on user experience, offering a seamless and intuitive interface that makes managing personal finances both simple and enjoyable.',
    },
    {
        id: 4,
        name: 'Unity 3D Adventure Game',
        previewPicture: '/noImage.jpg',
        videoDemo: '/videoBanner',
        technologyTag: 'Unity',
        description: 'The JavaScript Interactive Quiz App is an educational tool designed to make learning fun and interactive. Featuring a variety of question types such as multiple-choice, true/false, and short answer, the app adapts to different learning styles and subjects. The application includes real-time feedback, progress tracking, and the ability to create custom quizzes. Built with modern JavaScript frameworks, the app is responsive and accessible across different devices, ensuring a smooth user experience for both students and educators.',
    },
    {
        id: 5,
        name: 'JavaScript Interactive Quiz App',
        previewPicture: '/noImage.jpg',
        videoDemo: '/videoBanner',
        technologyTag: 'JavaScript',
        description: 'The Python Data Analysis Toolkit is a comprehensive application designed for data scientists and analysts. Equipped with powerful libraries such as Pandas, NumPy, and Matplotlib, the toolkit enables users to perform complex data manipulations, visualizations, and statistical analyses. The intuitive interface allows users to import datasets, clean and transform data, and generate insightful reports with ease. This project demonstrates the practical application of Python in handling large datasets and extracting meaningful insights, making it an invaluable resource for data-driven decision-making',
    },
    {
        id: 6,
        name: 'Python Data Analysis Toolkit',
        previewPicture: '/noImage.jpg',
        videoDemo: '/videoBanner',
        technologyTag: 'Python',
        description: 'The Python Data Analysis Toolkit is a comprehensive application designed for data scientists and analysts. Equipped with powerful libraries such as Pandas, NumPy, and Matplotlib, the toolkit enables users to perform complex data manipulations, visualizations, and statistical analyses. The intuitive interface allows users to import datasets, clean and transform data, and generate insightful reports with ease. This project demonstrates the practical application of Python in handling large datasets and extracting meaningful insights, making it an invaluable resource for data-driven decision-making.',
    },
];

export default ProjectsInfo;
  