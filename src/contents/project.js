import dentalVideo from '../assets/dental-clinic.mp4';
import luminaVideo from '../assets/lumina.mp4';
import crosswordVideo from '../assets/crossword.mp4';

export const data = [
    {
        id: 1,
        title: "Dental Clinic",
        date: "2026 - Now",
        description: "A dental clinic management web app, featuring patient records, appointments, and dental charting, powered by Supabase.",
        tags: ["React", "TailwindCSS", "TypeScript","JavaScript", "Supabase", "Vite","Vercel"],
        video: dentalVideo,
        links: {
            canva: "https://www.canva.com/design/DAHU4QRCul0/1f8MxbncWJFpMRylzLCkcQ/edit"
        }
    },
    {
        id: 2,
        title: "Lumina",
        date: "Feb - Mar 2026",
        description: "Collaborated within a 7-person cross-functional team to design end-to-end LINE OA user flows and interfaces while researching and compiling a comprehensive skincare database (product specs, skin suitability, and affiliate links) to power the AI recommendation engine and align UX solutions with business and technical goals.",
        tags: ["JavaScript", "Figma","CSS", "LINE-LIEF","Vercel"],
        video: luminaVideo,
        links: {
            canva: "http://canva.com/design/DAHU4BfeKWI/nfxQURhYIs0DvKSLieN-Ag/edit"
        }
    },
    {
        id: 3,
        title: "Crossword Game Project",
        date: "Sep - Oct 2024",
        description: "A crossword game project created to enhance vocabulary learning in an interactive way.",
        tags: ["Java"],
        video: crosswordVideo,
        links: {
            canva: "https://www.canva.com/design/DAHU4Sy6LEc/OOImAbz_x5GBQKCDf0OSKQ/edit"
        }
    }
];
