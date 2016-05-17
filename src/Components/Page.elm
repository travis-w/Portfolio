module Components.Page exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

type alias Link =
  { title : String
  , url : String
  , glyphicon : Maybe String
  }

type alias Job =
  { employer : String
  , title : String
  , startDate : String
  , endDate : String
  , description : String
}

type alias Page =
  { title : String
  , projects : Maybe (List Project)
  , languages : Maybe (List String)
  , frameworks : Maybe (List String)
  , jobs : Maybe (List Job)
  , links : Maybe (List Link)
  , aboutMe : Maybe String
  }

project : Project -> Html msg
project p =
  div [ class "project" ]
  [ h1 [] [ text p.title ]
  , text p.description
  , ul [ class "project-links" ]
    (List.map (\r -> li [] [ a [href r.url] [text r.title]]) p.links)
  ]

aboutPage : Page
aboutPage =
  { title = "Test"
  , projects = Nothing
  , languages = Nothing
  , frameworks = Nothing
  , jobs = Nothing
  , links = Nothing
  , aboutMe = Just "Testing"
  }
