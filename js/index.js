let videoIndex = 0;
let videoList = [
  {
    Game_Title: 'Apex Predator | Game Demo',
    URL: 'https://www.youtube.com/embed/lhwyxhih7P8?si=MBH83_vQyKinR9s-',
    Game_Description: 'A live gameplay demonstration of Apex Predator, a 2D Action RPG game created by a team of 4.',
  },
  {
    Game_Title: 'Lone Knight | Game Demo',
    URL: 'https://www.youtube.com/embed/q9JQKCBz83Q?si=9JbzDgEPBqxCZzkQ',
    Game_Description: 'A live gameplay demonstration of Lone Knight, a 2D Metrovania-style game created by myself.',
  },
  {
    Game_Title: 'Gui Arcade | Game Demo',
    URL: 'https://www.youtube.com/embed/MkakuKrAOPQ?si=PuVZwBwr3uHnqiH8',
    Game_Description: 'A live gameplay demonstration of Gui Arcade, a 2D Arcade-style game created by myself.',
  },
  {
    Game_Title: 'Super Mario Remix | Game Demo',
    URL: 'https://www.youtube.com/embed/__uhdUpiuhs?si=VwJCvdBh3lDuubqo',
    Game_Description: 'A live gameplay demonstration of Super Mario Remix, a 2D Puzzle Platformer game created by myself.',
  },
  {
    Game_Title: 'Gangnam Company | Game Demo',
    URL: 'https://www.youtube.com/embed/_ayLZ1gDf3E?si=WPhfME0SPFQooUwO',
    Game_Description: 'A live gameplay demonstration of Gangnam Company, a 2D Horror game created by a team of 4.',
  }
]

// Add video listeners
addVideoListener();
RenderVideo(videoList[videoIndex]);






/***************************************************************************************************/
/*@brief: This function adds video listeners to page buttons, so users can toggle between videos. **/
/***************************************************************************************************/
function addVideoListener()
{
  const videoButtonLeft = document.getElementById('demo-left');
  const videoButtonRight = document.getElementById('demo-right');

  videoButtonLeft.addEventListener("click", function(){SwapVideo(-1)});
  videoButtonRight.addEventListener("click", function(){SwapVideo(1)});
}

/***************************************************************************************************/
/*@brief: This function allows users to swap between videos on-demand.                            **/
/***************************************************************************************************/
function SwapVideo(increment)
{
  videoIndex += increment;

  if (videoIndex < 0)
      videoIndex = 4;
  
  if (videoIndex > 4)
      videoIndex = 0;

  RenderVideo(videoList[videoIndex]);
}

/***************************************************************************************************/
/*@brief: This function renders the video in the video playlist.                                  **/
/***************************************************************************************************/
function RenderVideo(video)
{
  const title = document.getElementById('video-title')
  const link = document.getElementById('video-link') 
  const description = document.getElementById('video-description')

  title.textContent = video.Game_Title;
  link.src = video.URL;
  description.textContent = video.Game_Description;
}