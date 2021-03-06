import Helmet from 'react-helmet';
import 'sleek-dashboard/dist/assets/css/sleek.css';
import "sleek-dashboard/dist/assets/plugins/nprogress/nprogress.css"; 
import "sleek-dashboard/dist/assets/plugins/flag-icons/css/flag-icon.min.css" ;
import "sleek-dashboard/dist/assets/plugins/jvectormap/jquery-jvectormap-2.0.3.css" ;
import "sleek-dashboard/dist/assets/plugins/ladda/ladda.min.css" ;
import "sleek-dashboard/dist/assets/plugins/select2/css/select2.min.css" ;
import "sleek-dashboard/dist/assets/plugins/daterangepicker/daterangepicker.css" ;
import "sleek-dashboard/dist/assets/plugins/charts/Chart.min.js";
import "sleek-dashboard/dist/assets/js/chart.js";
import "sleek-dashboard/dist/assets/plugins/slimscrollbar/jquery.slimscroll.js";
import '../../css/admin/index.css';
import React from 'react';


const AdminHead = () => {
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="../../public/admin/css/index.css"/>
                <link href="https://cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css" rel="stylesheet"/>
                <link rel="stylesheet" href="../../public/admin/css/component.css"/>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500|Poppins:400,500,600,700|Roboto:400,500" rel="stylesheet"/>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

            </Helmet>
        </div>
        
        
    );
}

export default AdminHead;
