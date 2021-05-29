const status = document.querySelector('.score'),
      estado_de_juego=['','','','','','','','',''],//espacio por los 9 movimientos
      jugadas= [
          [0,1,2],[3,4,5],[6,7,8],
          [0,3,6],[1,4,7],[2,5,8],
          [0,4,8],[2,4,6]//jugadas posibles y ganadoras
      ],
      win_message =() => `el jugador ${currentPlayer} ha ganado`,
      draw_message =() =>`el juego ha terminado`,
      current_player_turn =()=> `turno del jugador ${currentPlayer}`

      let juegoenCurso =true;
      let currentPlayer ='O';