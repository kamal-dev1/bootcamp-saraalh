<!DOCTYPE html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>bootcamp</title>



        <!-- Styles -->
        <style>
            body{
                background: #ffcc33
            }

        </style>
    </head>
    <body >

        {{-- <div style="margin:0px auto;text-align:center">
            @if ($name=='salam')
              {{" salam hasan"}}
            @endif

        </div>
        <div style="margin:0px auto;">
            {{ $name1 }}
        </div> --}}

        <table>

            <thead>
                <th>
                    <td>ایدی استان</td>
                    <td>نام استان</td>
                </th>
            </thead>
            @foreach ($ostan as $key => $value)
            <tr style="background: #faf1df">
                <td>
                    {{ $key }}
                </td>
                <td>
                    {{ $value }}
                </td>

            </tr>

            @endforeach

        </table>

    </body>
</html>
