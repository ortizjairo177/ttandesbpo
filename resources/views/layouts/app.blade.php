<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>
<nav class=" navbar-expand-lg navbar navbar-dark bg-dark  ">
<a href="#"><img  src="{{ asset('images/logoandes.jpg') }}"class="img-logo"  alt="logo1"></a>
  <!-- <a class="navbar-brand p-3 mb-2 bg-success text-white" href="#">ANDES BPO </a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse p-3 mb-2 bg-secondary text-white" id="navbarNav">
  <ul class="navbar-nav mr-auto mr-auto mt-2 mt-lg-0 navib text-white" >
            <li class="nav-item active " >
                <a class="nav-link " aria-current="page"  href="/">Inicio </a>

            @guest
             

                <li class="nav-item">
                    <a class="nav-link" href="#">Listado de Productos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Contactenos</a>
                </li>

                    <a class="nav-link" href="#">Iniciar sesión</a>
                </li>                 

            @else
                <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Categorias</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contactenos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="event.preventDefault();
                        document.getElementById('logout-form').submit()";>
                        Cerrar sesión </a>
                </li>
                
                <li><a href="#" >
                
                </li>             

                </div>
                <div class="d-flex justify-content-end " style="width:250px"  >
                <i class="bi bi-whatsapp p-3 mb-2 bg-success text-white  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" 
                            class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0
                            1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368
                            0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 
                            1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 
                            2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 
                            3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>

                        </svg>
                    </i>
                    <h6 class="nav-link p-3 mb-2 bg-success text-white" href="#">Bienvenido (a) {{ auth()->user()->name }}</h>

                </div>
                @endguest
        </ul>
  </div>
</nav>
    <form id="logout-form" action="{{ route('logout')}}" method="POST" style="display: none;">
       @csrf
    </form>

     <div class="container mt-5">   
     
      
       @yield('content')
     </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
        <script src="{{ asset('js/functions.js')}}" >    </script>
        
        @yield('scripts')
</body>
</html>
