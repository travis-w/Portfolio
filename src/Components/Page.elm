module Components.Page exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

import Components.Project exposing (..)
import Components.Experience exposing (..)
import Components.Link exposing (..)
import Components.Social exposing (..)
import Components.About exposing (..)

type alias Page =
  { title : String
  , projects : Maybe (List Project)
  , languages : Maybe (List String)
  , frameworks : Maybe (List String)
  , jobs : Maybe (List Job)
  , links : Maybe (List Link)
  , aboutMe : Maybe String
  }

projects : (Maybe (List Project)) -> (List (Html msg))
projects list =
  case list of
    Nothing ->
      [text ""]

    Just projects ->
      (List.map renderProject projects)


render : (Maybe Page) -> Html msg
render page =
  case page of
    Nothing ->
      div [] []

    Just p ->
      div [ class "project-list" ]
      ( List.concat
        [ ( projects p.projects )
        , [ renderSkills p.languages "Programming Languages" ]
        , [ renderSkills p.frameworks "Libraries/Frameworks" ]
        , [ renderJobPanel p.jobs ]
        , [ renderSocialPanel p.links ]
        , [ renderAboutPanel p.aboutMe ]
        ]
      )
