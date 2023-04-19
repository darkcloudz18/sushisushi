import axios from "axios";

export default function InstaFeed() {
    const params = {
      fields: 'media_url,media_type,thumbnail_url,caption',
      access_token: process.env.insta_token
    };
    return axios.get("https://graph.instagram.com/me/media", {params})
        .then((data) => {
            return data.data["data"].slice(0,5);
    }).catch(() => {
        throw new Error('Instagram API error');
    });
}