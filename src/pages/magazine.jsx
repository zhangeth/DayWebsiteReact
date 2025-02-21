import HomeHero from "../components/homeComponents/homeHero";
import zineSP23 from "../assets/Magazines/s23zine.pdf"
import zineFA23 from "../assets/Magazines/f23zine.pdf"
import cookbookFA23 from "../assets/Magazines/f23cookbook.pdf"
import zineSP24 from "../assets/Magazines/s24zine.pdf"
import zineFA24 from "../assets/Magazines/f24zine.pdf"
import { StorageImage } from '@aws-amplify/ui-react-storage';

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

import React, {useState, useEffect} from 'react';
import { list } from 'aws-amplify/storage';

import '../css/magazine.css'

const title = "DAY MAGAZINE";
const message = "Every semester, DAY composes a multimedia magazine featuring pieces primarily made by students here in USC's APIDA community. Every magazine encompasses a theme voted on by the club in connection to Asian American identity and the experience of being cultural in-betweeners. Our club is always open to contributions so please reach out if you have a story to share!"
const zines = [zineSP23, zineFA23, cookbookFA23, zineSP24, zineFA24];
const zineTitles = [
  "[Roots] - SP 2023 Magazine",
  "[TTLG] - FA 2023 Magazine",
  "[Wok and Roll] - FA 2023 Cookbook",
  "[Lost and Found] - SP 2024 Magazine",
  "[Mono no Aware] - FA 2024 Magazine",
];

// const bucketName = 'daywebsitereact-storage-4bc14e8991458-dev';
// const objectKey = 'rodrigo_1.jpg';
// const s3Url = `https://${bucketName}.s3.amazonaws.com/public/${objectKey}`;
// let imageUrl = 'blah';

// const ImageComponent = () => {
//     Amplify.configure(awsconfig);
//     const [imageUrl, setImageUrl] = useState('');
  
//     useEffect(() => {
//       const getImageUrl = async () => {
//         try {
//             const result = await list({
//                 prefix: 'public/'
//             });
//             console.log(result);
//             } catch (error) {
//             console.log(error);
//             }
//         try {
//           const url = await Storage.get('rodrigo_1.jpg', { level: 'guest' });
//           setImageUrl(url);
//         } catch (error) {
//           console.error('Error getting image URL:', error);
//         }
//       };
  
//       getImageUrl();
//     }, []);
  
//     return (
//       <div>
//         {imageUrl && (
//           <img src={imageUrl} alt="cat" />
//         )}
//       </div>
//     );
//   };

function Magazine()
{
    // fetch(s3Url)
    // .then(response => {
    //     if (!response.ok) {
    //     throw new Error(`Failed to fetch S3 object: ${response.statusText}`);
    //     }
    //     return response.blob();
    // })
    // .then(blob => {
    //     // Handle the blob, e.g., display the image
    //     imageUrl = URL.createObjectURL(blob);
    //     console.log('Image URL:', imageUrl);
    // })
    // .catch(error => {
    //     console.error('Error fetching S3 object:', error);
    // });

    const [curr, setCurr] = useState(0);
    const [pdfCache, setPdfCache] = useState({}); // Store cached PDFs
    const [pdfUrl, setPdfUrl] = useState(null);
  
    useEffect(() => {
      const loadPdf = async () => {
        if (pdfCache[curr]) {
          // If cached, use the existing URL
          setPdfUrl(pdfCache[curr]);
        } else {
          try {
            // Fetch the PDF and create a blob URL
            const response = await fetch(zines[curr]);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
  
            // Store in cache
            setPdfCache(prevCache => ({ ...prevCache, [curr]: url }));
            setPdfUrl(url);
          } catch (error) {
            console.error("Error loading PDF:", error);
          }
        }
      };
  
      loadPdf();
    }, [curr, zines, pdfCache]);

    return(
        <div>
            {HomeHero(title, message)}

            <div className = "row justify-content-center"> 
            <div className="col-5 magazine-tab">
              {zineTitles.map((magazine, i) => (
                <div
                  key={i}
                  className={`magazine-body ${curr === i ? "selected" : "unselected"}`}
                  onClick={() => setCurr(i)}
                >
                  {magazine}
                </div>
              ))}
            </div>{/* sidebar */}

              <div className="col-7 text-center">
                  <div className="magazine-class">
                  {
                      pdfUrl ? 
                      <object className="magazine-container" data={pdfUrl} type="application/pdf"></object> :
                      <p>Loading...</p>
                  }                  
                  </div>
              </div> {/* zine content */}
            </div>
        </div>
    );
}
export default Magazine;