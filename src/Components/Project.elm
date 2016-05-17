module Components.Project exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

type alias Link =
  { title : String
  , url : String
  }

type alias Project =
  { title : String
  , description : String
  , tools : List String
  , links : List Link
  }

type alias ProjectPage =
  { title : String
  , projects : List Project
  }

renderProject : Project -> Html msg
renderProject p =
  div [ class "project" ]
  [ h1 [] [ text p.title ]
  , text p.description
  , ul [ class "project-links" ]
    (List.map (\r -> li [] [ a [href r.url] [text r.title]]) p.links)
  ]

renderPage : ProjectPage -> Html msg
renderPage p =
  div [ class "project-list" ] ( List.map renderProject p.projects )
