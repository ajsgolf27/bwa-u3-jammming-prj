const access_Token = ''

const Spotify= {

    search: function(searchTerm){
        fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,{
            headers:{Authorization: `Bearer ${accessToken}`}
        }).then(response => {
            if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed!');
    }, networkError => console.log(networkError.message)
        
        ).then(jsonResponse => {
            if(jsonResponse.track){
                return jsonResponse.tracks.map(track => {
                    return {
                        ID: track.id,
                        Name: track.name,
                        Artist: track.artists[0].name,
                        Album: track.album.name,
                        URI: track.uri
                    }
                })
            }
        });
    },

    getAccessToken: function(){
        if(access_Token === ''){
            if(window.location.href.match('/access_token=([^&]*)/', '/expires_in=([^&]*)/')){

            }
        }
        return access_Token
    },

    savePlaylist: function(playListName,trackURIS){
        if(!playListName && !trackURIS){
            return
        }

        //unclear instructions step  91. where do you create the default variables
    }
}

export default Spotify;