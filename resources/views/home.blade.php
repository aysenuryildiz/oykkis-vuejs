@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    burası ana sayfa!

<div class="list-group">
<ul class="list-group list-group-flush">
                   
@foreach($todos as $todo)
<li class="list-group-item">
  <a href ="{{ route ('todos.toggle', $todo) }}" >
   @if($todo->completed_at) ✔ <del>@endif
   {{  $todo->text }}
   @if($todo->completed_at)
    </del>  @endif
    </a>
</li>
@endforeach
</ul>
</div>

<form action ="{{ route('todos.store') }} " method="post" class="form-inline">
   @csrf
   <input type="text" name="todo" class="form-control mb-2 mr-sm-2"><br>
   <br>
  <button type="submit" class="btn btn-primary mb-2">Ekle</button> 
  @error ('todo')
    <hr>
    {{ $message}}
  @enderror
</form>
                </div>
            </div>
        </div>
    </div>
</div>



@endsection
