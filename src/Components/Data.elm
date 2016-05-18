module Components.Data exposing (..)

import Components.Project exposing (..)
import Components.Experience exposing (..)
import Components.Page exposing (..)

-- Projects
pCheckers : Project
pCheckers =
  { title = "Checkers"
  , description = "Python checkers game played in the console. I am attempting to create the game from scratch and hope to add the ability to create AIs that are able to compete against each other. I am also trying to strengthen my knowledge of Unit Tests with this project."
  , tools = ["Python"]
  , links =
    [ { title = "Source"
      , url = "https://github.com/travis-w/checkers"
      , glyphicon = Nothing
      }
    , { title = "CI"
      , url = "https://travis-ci.org/travis-w/checkers"
      , glyphicon = Nothing
      }
    ]
  }

pPortfolio : Project
pPortfolio =
  { title = "Portfolio"
  , description = "My personal website that I will use to showcase my past and current projects as well as listing my work experience. Currently made with ReactJS."
  , tools = ["NodeJS", "ReactJS", "Webpack", "HTML", "SASS"]
  , links =
    [ { title = "Link"
      , url = "http://thetravisw.com"
      , glyphicon = Nothing
      }
    , { title = "Source"
      , url = "http://github.com/travis-w/Portfolio"
      , glyphicon = Nothing
      }
    ]
  }

pSearchTwitter : Project
pSearchTwitter =
  { title = "Search On Twitter"
  , description = "Twitter is the best source for information on current events.  Search On Twitter is a Google Chrome extension that allows you to search Twitter at any time. Just higlight what you want to search and you will have the option to search Twitter for the highlighted text in the context menu."
  , tools = ["JavaScript", "Google Chrome API"]
  , links =
    [ { title = "Chrome Web Store"
      , url = "https://chrome.google.com/webstore/detail/search-on-twitter/dhpmpdpphfgejncefefmdhklfbliefkm"
      , glyphicon = Nothing
      }
    , { title = "Source"
      , url = "https://github.com/travis-w/Search-On-Twitter"
      , glyphicon = Nothing
      }
    ]
  }

pLinkSharing : Project
pLinkSharing =
  { title = "Link Sharing"
  , description = "A Google Chrome extension that allows multiple users to share links between eachother."
  , tools = ["JavaScript", "Google Chrome API"]
  , links =
    [ { title = "Chrome Web Store"
      , url = "https://chrome.google.com/webstore/detail/link-sharing/haehadeohhghodnfohinokocaaellnga"
      , glyphicon = Nothing
      }
    , { title = "Source"
      , url = "https://github.com/travis-w/Link-Sharing"
      , glyphicon = Nothing
      }
    ]
  }

pTwitchTetris : Project
pTwitchTetris =
  { title = "Twitch Plays Tetris"
  , description = "Twitch Plays Tetris is an experiment in which Tetris is played by a group of viewers collaborating through a livestream chat. We used JS Tetris for the actual game and I created the functionality to interact with the chatroom."
  , tools = ["JavaScript", "HTML", "CSS"]
  , links =
    [ { title = "Link"
      , url = "http://twitch.tv/tetrisplaystwitch"
      , glyphicon = Nothing
      }
    ]
  }

pCampusAlly : Project
pCampusAlly =
  { title = "CampusAlly"
  , description = "CampusAlly that will allow students to collaborate on and share notes for classes. The development has currently been put on hold while I expand my knowledge of web development."
  , tools = ["PHP", "HTML", "CSS", "MySQL"]
  , links =
    [ { title = "Link"
      , url = "http://campusally.com"
      , glyphicon = Nothing
      }
    ]
  }

pageProjects : Page
pageProjects =
  { title = "Projects"
  , projects = Just [pCheckers, pPortfolio, pSearchTwitter, pLinkSharing, pTwitchTetris, pCampusAlly]
  , languages = Nothing
  , frameworks = Nothing
  , jobs = Nothing
  , aboutMe = Nothing
  , links = Nothing
  }

pageExperience : Page
pageExperience =
  { title = "Experience"
  , languages = Just ["HTML", "CSS", "JavaScript", "SQL", "PHP", "C++", "ASP.NET", "C#", "Python"]
  , frameworks = Just ["Bootstrap", "ReactJS", "AngularJS", "NodeJS", "Knockout", "ExpressJS", "jQuery"]
  , jobs = Just
  [ { employer = "Commerce Bank"
    , title = "Information Technology Intern"
    , startDate = "May 2016"
    , endDate = ""
    , description = "Information Technology intern for Commerce Bank in Kansas City."
    }
  , { employer = "Nucor-Yamato Steel"
    , title = "Systems Analyst Intern"
    , startDate = "May 2014"
    , endDate = "January 2015"
    , description = "Created and maintained several C#/ASP.NET applications used by metallurgists and lab technicians."
    }
  ]
  , projects = Nothing
  , aboutMe = Nothing
  , links = Nothing
  }
