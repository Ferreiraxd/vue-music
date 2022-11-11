import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = async function (q) {
  const type = 'track'
  return new Promise((resolve, reject) => {
    platziMusicService.get('/search', {
      params: {
        q: q, type: type
      }
    }).then((res) => resolve(res))
      .catch((error) => reject(error))
  })
  /* platziMusicService.get('/search', {
    params: {
      q: q, type: type
    }
  }).then((res) => res) */
}

trackService.getById = function (id) {
  console.log(id);
  return platziMusicService.get(`/tracks/${id}`).then(res => res.data);
}

export default trackService
