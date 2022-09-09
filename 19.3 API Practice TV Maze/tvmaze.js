'use strict';

const $showsList = $('#shows-list');
const $episodesArea = $('#episodes-area');
const $searchForm = $('#search-form');
const MISSING_IMAGE_URL = 'http://tinyurl.com/missing-tv';

/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${term}`);
  let shows = res.data.map((result) => {
    // mapping through each show and creating an object that is iterable
    let show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      url: show.url,
      image: show.image ? show.image.medium : MISSING_IMAGE_URL,
    };
  });
  return shows;
}

/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src="${show.image}"
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary"><a href=${show.url}>${show.name}</a></h5>
             <div><small>${show.summary}</small></div>
             <button id="getEpisodes" class="btn btn-outline-dark btn-sm get-episodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `
    );

    $showsList.append($show);
  }
}

/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $('#search-query').val();
  const shows = await getShowsByTerm(term);

  // $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on('submit', async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});

/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
  let epList = res.data.map((episode) => ({
    id: episode.id,
    name: episode.name,
    season: episode.season,
    number: episode.number,
  }));
  console.log(epList);
  return epList;
}

function populateEpisodes(episodes) {
  const $episodesList = $('#episodes-list');
  $episodesList.empty();

  for (let episode of episodes) {
    let $ep = $(
      `<li>
        ${episode.name} (season ${episode.season}, episode ${episode.number})
        </li>
      `
    );
    $episodesList.append($ep);
  }
  $('#episodes-area').show();
}

$('#shows-list').on(
  'click',
  '.get-episodes',
  async function handleEpisodeClick(evt) {
    let showId = $(evt.target).closest('.Show').data('show-id');
    console.log(showId);
    let epList = await getEpisodesOfShow(showId);
    populateEpisodes(epList);
  }
);
