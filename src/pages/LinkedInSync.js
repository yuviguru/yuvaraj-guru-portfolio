import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const LinkedInSync = () => {
    const [accessToken, setAccessToken] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const authCode = urlParams.get('code');

        if (authCode) {
            exchangeCodeForToken(authCode);
        }
    }, [location]);

    const handleLogin = () => {
        const clientId = '8694xmsm25fran';
        const redirectUri = 'http://localhost:3000/linkedIn';
        const scope = 'w_member_social';
        const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
        window.location.href = authorizationUrl;
    };

    const exchangeCodeForToken = async (code) => {
        const data = {
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: 'http://localhost:3000/linkedIn',
            client_id: 'YOUR_CLIENT_ID',
            client_secret: 'YOUR_CLIENT_SECRET',
        };

        try {
            const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', new URLSearchParams(data), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            setAccessToken(response.data.access_token);
        } catch (error) {
            console.error('Error exchanging code:', error);
        }
    };

    const fetchLinkedInData = async () => {
        if (!accessToken) return;

        try {
            const response = await axios.get('https://api.linkedin.com/v2/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching LinkedIn data:', error);
        }
    };

    return (
        <div>
            <button onClick={handleLogin} className='text-typography'>Login with LinkedIn</button>
            {accessToken && <button onClick={fetchLinkedInData}>Fetch LinkedIn Data</button>}
        </div>
    );
};

export default LinkedInSync;
