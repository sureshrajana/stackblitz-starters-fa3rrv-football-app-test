import { ApiStandingLeagueResponse } from "../models/standing.model";

export const getStandings = (): ApiStandingLeagueResponse => ((
    {
        "results": 1,
        "paging": {
            "current": 1,
            "total": 1
        },
        "response": [
            {   
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "country": "England",
                    "logo": "https://media-4.api-sports.io/football/leagues/39.png",
                    "flag": "https://media-4.api-sports.io/flags/gb.svg",
                    "season": 2023,
                    "standings": [
                        [
                            {
                                "rank": 1,
                                "team": {
                                    "id": 50,
                                    "name": "Manchester City",
                                    "logo": "https://media-4.api-sports.io/football/teams/50.png"
                                },
                                "points": 15,
                                "goalsDiff": 11,
                                "all": {
                                    "played": 5,
                                    "win": 5,
                                    "draw": 0,
                                    "lose": 0,
                                },
                            },
                            {
                                "rank": 2,
                                "team": {
                                    "id": 47,
                                    "name": "Tottenham",
                                    "logo": "https://media-4.api-sports.io/football/teams/47.png"
                                },
                                "points": 13,
                                "goalsDiff": 8,
                                "all": {
                                    "played": 5,
                                    "win": 4,
                                    "draw": 1,
                                    "lose": 0,
                                    
                                },
                            },
                            {
                                "rank": 3,
                                "team": {
                                    "id": 40,
                                    "name": "Liverpool",
                                    "logo": "https://media-4.api-sports.io/football/teams/40.png"
                                },
                                "points": 13,
                                "goalsDiff": 8,
                                "all": {
                                    "played": 5,
                                    "win": 4,
                                    "draw": 1,
                                    "lose": 0,
                                    
                                },
                            },
                            {
                                "rank": 4,
                                "team": {
                                    "id": 42,
                                    "name": "Arsenal",
                                    "logo": "https://media-4.api-sports.io/football/teams/42.png"
                                },
                                "points": 13,
                                "goalsDiff": 5,
                                "all": {
                                    "played": 5,
                                    "win": 4,
                                    "draw": 1,
                                    "lose": 0,
                                },
                            },
                            {
                                "rank": 5,
                                "team": {
                                    "id": 51,
                                    "name": "Brighton",
                                    "logo": "https://media-4.api-sports.io/football/teams/51.png"
                                },
                                "points": 12,
                                "goalsDiff": 8,
                                "all": {
                                    "played": 5,
                                    "win": 4,
                                    "draw": 0,
                                    "lose": 1,
                                    
                                },
                            },
                            {
                                "rank": 6,
                                "team": {
                                    "id": 48,
                                    "name": "West Ham",
                                    "logo": "https://media-4.api-sports.io/football/teams/48.png"
                                },
                                "points": 10,
                                "goalsDiff": 3,
                                "all": {
                                    "played": 5,
                                    "win": 3,
                                    "draw": 1,
                                    "lose": 1,
                                },
                            },
                            {
                                "rank": 7,
                                "team": {
                                    "id": 66,
                                    "name": "Aston Villa",
                                    "logo": "https://media-4.api-sports.io/football/teams/66.png"
                                },
                                "points": 9,
                                "goalsDiff": 1,"all": {
                                    "played": 5,
                                    "win": 3,
                                    "draw": 0,
                                    "lose": 2,
                                },
                            },
                            {
                                "rank": 8,
                                "team": {
                                    "id": 52,
                                    "name": "Crystal Palace",
                                    "logo": "https://media-4.api-sports.io/football/teams/52.png"
                                },
                                "points": 7,
                                "goalsDiff": -1,
                                "all": {
                                    "played": 5,
                                    "win": 2,
                                    "draw": 1,
                                    "lose": 2,
                                    
                                },
                            },
                            {
                                "rank": 9,
                                "team": {
                                    "id": 36,
                                    "name": "Fulham",
                                    "logo": "https://media-4.api-sports.io/football/teams/36.png"
                                },
                                "points": 7,
                                "goalsDiff": -5,
                                "all": {
                                    "played": 5,
                                    "win": 2,
                                    "draw": 1,
                                    "lose": 2,
                                },
                            },
                            {
                                "rank": 10,
                                "team": {
                                    "id": 55,
                                    "name": "Brentford",
                                    "logo": "https://media-4.api-sports.io/football/teams/55.png"
                                },
                                "points": 6,
                                "goalsDiff": 2,
                                "all": {
                                    "played": 5,
                                    "win": 1,
                                    "draw": 3,
                                    "lose": 1,
                                    
                                },
                            },
                            {
                                "rank": 11,
                                "team": {
                                    "id": 34,
                                    "name": "Newcastle",
                                    "logo": "https://media-4.api-sports.io/football/teams/34.png"
                                },
                                "points": 6,
                                "goalsDiff": 1,
                                "all": {
                                    "played": 5,
                                    "win": 2,
                                    "draw": 0,
                                    "lose": 3,
                                    
                                },
                            },
                            {
                                "rank": 12,
                                "team": {
                                    "id": 65,
                                    "name": "Nottingham Forest",
                                    "logo": "https://media-4.api-sports.io/football/teams/65.png"
                                },
                                "points": 6,
                                "goalsDiff": 0,
                                "all": {
                                    "played": 4,
                                    "win": 2,
                                    "draw": 0,
                                    "lose": 2,
                                },
                            },
                            {
                                "rank": 13,
                                "team": {
                                    "id": 33,
                                    "name": "Manchester United",
                                    "logo": "https://media-4.api-sports.io/football/teams/33.png"
                                },
                                "points": 6,
                                "goalsDiff": -4,
                                "all": {
                                    "played": 5,
                                    "win": 2,
                                    "draw": 0,
                                    "lose": 3,
                                    
                                },
                            },
                            {
                                "rank": 14,
                                "team": {
                                    "id": 49,
                                    "name": "Chelsea",
                                    "logo": "https://media-4.api-sports.io/football/teams/49.png"
                                },
                                "points": 5,
                                "goalsDiff": 0,
                                "all": {
                                    "played": 5,
                                    "win": 1,
                                    "draw": 2,
                                    "lose": 2,
                                    
                                },
                            },
                            {
                                "rank": 15,
                                "team": {
                                    "id": 35,
                                    "name": "Bournemouth",
                                    "logo": "https://media-4.api-sports.io/football/teams/35.png"
                                },
                                "points": 3,
                                "goalsDiff": -4,
                                "all": {
                                    "played": 5,
                                    "win": 0,
                                    "draw": 3,
                                    "lose": 2,
                                    
                                },
                            },
                            {
                                "rank": 16,
                                "team": {
                                    "id": 39,
                                    "name": "Wolves",
                                    "logo": "https://media-4.api-sports.io/football/teams/39.png"
                                },
                                "points": 3,
                                "goalsDiff": -6,
                                "all": {
                                    "played": 5,
                                    "win": 1,
                                    "draw": 0,
                                    "lose": 4,
                                },
                            },
                            {
                                "rank": 17,
                                "team": {
                                    "id": 62,
                                    "name": "Sheffield Utd",
                                    "logo": "https://media-4.api-sports.io/football/teams/62.png"
                                },
                                "points": 1,
                                "goalsDiff": -4,
                                "all": {
                                    "played": 5,
                                    "win": 0,
                                    "draw": 1,
                                    "lose": 4,
                                },
                            },
                            {
                                "rank": 18,
                                "team": {
                                    "id": 45,
                                    "name": "Everton",
                                    "logo": "https://media-4.api-sports.io/football/teams/45.png"
                                },
                                "points": 1,
                                "goalsDiff": -7,
                                "all": {
                                    "played": 5,
                                    "win": 0,
                                    "draw": 1,
                                    "lose": 4,
                                    
                                },
                                
                            },
                            {
                                "rank": 19,
                                "team": {
                                    "id": 44,
                                    "name": "Burnley",
                                    "logo": "https://media-4.api-sports.io/football/teams/44.png"
                                },
                                "points": 0,
                                "goalsDiff": -8,
                                "all": {
                                    "played": 3,
                                    "win": 0,
                                    "draw": 0,
                                    "lose": 3,
                                    
                                },
                            },
                            {
                                "rank": 20,
                                "team": {
                                    "id": 1359,
                                    "name": "Luton",
                                    "logo": "https://media-4.api-sports.io/football/teams/1359.png"
                                },
                                "points": 0,
                                "goalsDiff": -8,
                                "all": {
                                    "played": 4,
                                    "win": 0,
                                    "draw": 0,
                                    "lose": 4,
                                },
                            }
                        ]
                    ]
                }
            }
        ]
        
    }
));
