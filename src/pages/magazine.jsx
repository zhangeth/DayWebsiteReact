import HomeHero from "../components/homeComponents/homeHero";
import dayZine from "../assets/day_zine.pdf"
import { StorageImage } from '@aws-amplify/ui-react-storage';

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

import React, {useState, useEffect} from 'react';
import { list } from 'aws-amplify/storage';

import '../css/magazine.css'

const bucketName = 'daywebsitereact-storage-4bc14e8991458-dev';
const objectKey = 'rodrigo_1.jpg';
const s3Url = `https://${bucketName}.s3.amazonaws.com/public/${objectKey}`;
let imageUrl = 'blah';

const ImageComponent = () => {
    Amplify.configure(awsconfig);
    const [imageUrl, setImageUrl] = useState('');
  
    useEffect(() => {
      const getImageUrl = async () => {
        try {
            const result = await list({
                prefix: 'public/'
            });
            console.log(result);
            } catch (error) {
            console.log(error);
            }
        try {
          const url = await Storage.get('rodrigo_2.jpg', { level: 'guest' });
          setImageUrl(url);
        } catch (error) {
          console.error('Error getting image URL:', error);
        }
      };
  
      getImageUrl();
    }, []);
  
    return (
      <div>
        {imageUrl && (
          <img src={imageUrl} alt="cat" />
        )}
      </div>
    );
  };

function Magazine()
{
    fetch(s3Url)
    .then(response => {
        if (!response.ok) {
        throw new Error(`Failed to fetch S3 object: ${response.statusText}`);
        }
        return response.blob();
    })
    .then(blob => {
        // Handle the blob, e.g., display the image
        imageUrl = URL.createObjectURL(blob);
        console.log('Image URL:', imageUrl);
    })
    .catch(error => {
        console.error('Error fetching S3 object:', error);
    });
    return(
        <div>
            <StorageImage alt="your mom" imgKey='rodrigo_1.jpg' accessLevel="guest" />
            <div>
                {HomeHero("DAY MAGAZINE", "")}
            </div>
            <div className="magazine-body">
                Each semester, DAY composes a literary and art magazine featuring pieces
                made by USC students who are a part of the APIDA community. The most recent
                magazine was released in April 2023, with the theme titled "Roots." As the
                title suggests, students reflected on their upbringings and how being a part
                of the APIDA community has shaped their lives.
            </div>
            <div className="magazine-class">
                <object className="magazine-container" data={dayZine} type="application/pdf"></object>
            </div>
            <div>
            <ImageComponent imgKey="rodrigo_2.jpg" />
            {/* Add more instances with different image keys if needed */}
            <ImageComponent imgKey="another_image.jpg" />
            </div>
            
        </div>
    );
}
export default Magazine;