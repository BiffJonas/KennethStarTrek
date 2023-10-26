let registration = null;

function register_service__worker() {
    if('serviceWorker' in navigator){
        window.navigator.serviceWorker.register('./sw.js', {scope: './'})
            .then(res => {
                registration = res;
                console.log('Service Worker successfully registered.')
                
            })
            .catch(err => {
                console.log('Could not register service worker')
                
            });
    }
}


function unregister_service__worker() {
    navigator.serviceWorker.getRegistration()
        .then(registrations => {
            registrations.foreach(registration => {
                registration.unregister();
                console.log('Service Worker Unregistered.')
                
            })
        })
        .catch(err => {
            console.log('could not unregister service worker')
        })
}