var textInput = document.getElementById("txt");


  //função para bloquear caracteres especias
    textInput.addEventListener("keypress", function(evento) {

      if(!checkChar(evento)) {
        evento.preventDefault();
      }
    });

    function checkChar(evento) {
      const char = String.fromCharCode(evento.keyCode);

      const pattern = '[ a-zA-Z]';

      if(char.match(pattern)) {
        return true;
      }
    }

    //fim

    function criptografar() {

        const text = textInput.value.trim()

        if(text != '') {
    
        let result = ''
        Array.from(text).forEach(letra => {
        
          switch (letra) {
            case 'e':
              result += 'enter';
              break;
            case 'i':
              result += 'imes';
              break;
            case 'a':
              result += 'ai';
              break;
            case 'o':
              result += 'ober';
              break;
            case 'u':
              result += 'ufat';
              break;
            default:
              result += letra;
          }
        });

      
    
        document.getElementById("not-msg").innerHTML = `<div id="not-msgl">
        
            <h3>Resultado</h3>
            <textarea cols="3" rows="3" id="resultadotexto" readonly>${result}</textarea>
            <button onclick="copy()" id="button-copiar">Copiar</button>
            </div>`
      }

       else {

        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'diginte sua mensagem no campo indicado',
        
        })
        
       }

      }

  
        function descriptografar() {
            const result = textInput.value.trim()
              .replace(/enter/g, 'e')
              .replace(/imes/g, 'i')
              .replace(/ai/g, 'a')
              .replace(/ober/g, 'o')
              .replace(/ufat/g, 'u');

              if(result != '') {

            document.getElementById("not-msg").innerHTML = `<div id="not-msgl">
            <h3>Resultado</h3>
            <textarea cols="5" rows="5" id="resultadotexto" readonly>${result}</textarea>
            <button onclick="copy()" id="button-copiar">Copiar</button>
            </div>`

            }

            else {

              Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'nada a descriptografar',
              
              })
              
            }

    }

        async function copy() {
          document.getElementById("resultadotexto").select();
          document.execCommand('copy');

          const Toast = Swal.mixin({
          
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Copiado com sucesso'
          })
    }     










