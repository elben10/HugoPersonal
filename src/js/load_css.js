import $ from 'jquery'
export default function unhide_webpage() {
    $(document).ready(function(){
        $("body").removeClass('hide')
    });
    console.log('hej');
}