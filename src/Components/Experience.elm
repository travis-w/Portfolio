module Components.Experience exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)
import VirtualDom exposing (Node)

type alias Job =
  { employer : String
  , title : String
  , startDate : String
  , endDate : String
  , description : String
  }

renderJob : Job -> VirtualDom.Node msg
renderJob j =
  div [ class "employment" ]
  [ h2 []
    [ text (j.employer ++ " ")
    , small [] [ text j.title ]
    , span [ class "employment-date"] [ text (j.startDate ++ " - " ++ j.endDate) ]
    ]
  , text j.description
  ]

renderJobPanel : (Maybe (List Job)) -> Html msg
renderJobPanel jobs =
  case jobs of
    Nothing ->
      (text "")

    Just j ->
      div [ class "project" ]
      (List.append [ h1 [] [ text "Employment" ] ] (List.map renderJob j))

renderSkill : String -> VirtualDom.Node msg
renderSkill s =
  (node "span" [ class "skill" ] [ text s ])

renderSkills : (Maybe (List String)) -> String -> Html msg
renderSkills l title =
  case l of
    Nothing ->
      (text "")

    Just skills ->
      div [ class "project" ]
      (List.append ([ h1 [] [ text title ]]) ( List.map renderSkill skills ))

{-
renderExperiencePage : ExperiencePage -> Html msg
renderExperiencePage p =
  div [ class "project-list" ]
  [ renderSkills p.languages "Programming Languages"
  , renderSkills p.frameworks "Libraries/Frameworks"
  , div [ class "project" ]
    (List.append [ h1 [] [ text "Employment" ] ] (List.map renderJob p.jobs))
  ]
-}
