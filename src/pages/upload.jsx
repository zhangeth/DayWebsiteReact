import { StorageImage, StorageManager } from '@aws-amplify/ui-react-storage';
import * as mutations from '../graphql/mutations';
import { Authenticator } from '@aws-amplify/ui-react';

function handleClick() {
    console.log('Button clicked!');
    // You can put any code you want to execute here.
}

function Upload() {
    return (
        <div>
            <h1 style={{'text-align':'center'}}>My Gallery</h1> 
                    
            <StorageManager
                acceptedFileTypes={['image/*']}
                accessLevel="public"
                maxFileCount={1}
                isResumable
            />
            
            <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
        </div>

    );
}

export default Upload;