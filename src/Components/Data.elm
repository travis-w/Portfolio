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
      , url = "https://github.com/travis-w/chehttp://thetravisw.com"
      , glyphicon = Nothing
      }
    , { title = "Source"
      , url = "http://github.com/travis-w/Portfolio"
      , glyphicon = Nothing
      }
    ]
  }

pageProjects : Page
pageProjects =
  { title = "Projects"
  , projects = Just [pCheckers, pPortfolio]
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
