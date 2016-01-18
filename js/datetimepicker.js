
    <script type="text/javascript" src="__U__/js/jquery-ui.js"></script>
    <script type="text/javascript" src="__U__/js/jquery-ui-slide.min.js"></script>
    <script type="text/javascript" src="__U__/js/jquery-ui-timepicker-addon.js"></script>

$('#startTime').datepicker({
            dateFormat: "yy-mm-dd",
            yearRange:"2012:",
            maxDate: -1,
            onClose: function( selectedDate ) {
                if(selectedDate=='')return;
                var selectedDate1 = selectedDate.replace(/-/g,"/");
                var date = new Date(selectedDate1);
                var selectTime=date.getTime();
                var current=new Date().getTime();

                var n=selectTime+24*15*3600*1000;
                    n=n>current?current:n;
                var nDate= new Date(n);
                var str=nDate.getFullYear()+'-'+(nDate.getMonth()+1)+'-'+nDate.getDate();
                $( "#endTime" ).datepicker( "option", "minDate",selectedDate);
                $( "#endTime" ).datepicker( "option", "maxDate",str);
            }
        });
        $('#endTime').datepicker({
            dateFormat: "yy-mm-dd",
            yearRange:"2012:",
            maxDate: -1,
            showButtonPanel: true,
            closeText: 'Çå¿Õ',
            onClose: function( selectedDate ) {
                if(selectedDate=='')return;
                var selectedDate1 = selectedDate.replace(/-/g,"/");
                var date = new Date(selectedDate1);
                var selectTime=date.getTime();
                var current=new Date().getTime();

                var min=selectTime-24*15*3600*1000;
                min=min>current?current:min;
                var nDate= new Date(min);
                var str=nDate.getFullYear()+'-'+(nDate.getMonth()+1)+'-'+nDate.getDate();
                $( "#startTime" ).datepicker( "option", "minDate", str );
                $( "#startTime" ).datepicker( "option", "maxDate", selectedDate );
            },
        });

        $(".ui-datepicker-close").live("click", function (){
            $('#endTime').val('');
            $( "#startTime" ).datepicker( "option", "minDate", '2012-01-01' );
            var date=new Date();
            $( "#startTime" ).datepicker( "option", "maxDate",
                     date.getFullYear()+'-'+date.getMonth()+1+'-'+date.getDate());
        });
