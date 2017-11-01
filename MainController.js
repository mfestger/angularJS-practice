app.controller('MainController', function ($scope, $sce, $timeout) {

    $scope.title = 'Welcome to your GigaPet Simulator';
    $scope.header = 'An Angular JS GigaPet Clone';
    $scope.subHeader = 'by Mike Festger'
    $scope.propertiesTitle = 'Pet Properties';
    $scope.species = '';
    $scope.selectedDog = '';
    $scope.hungerLevel = 1;
    $scope.petMessages = '';

    //an arry of dog objects
    $scope.dogBreeds = [
        {
            name: 'Labrador',
            image: 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2017/06/Danielle-f1-300x300.jpg'
        },

        {
            name: 'Bulldog',
            image: $sce.trustAsResourceUrl('https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2017/07/Avery-m-300x300.jpg')
        },

        {
            name: 'Dobberman',
            image: 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2017/06/Bradley-m2-300x300.jpg'
        },

        {
            name: 'Poodle',
            image: 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2017/10/Rosie-F-2-300x300.jpg'
        },

        {
            name: 'Chihuahua',
            image: 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2017/10/Darby-M2-300x300.jpg'
        }];

    //an arry of cat objects
    $scope.catBreeds = [
        {
            name: 'Tabby',
            image: 'http://baristacatscafe.co.nz/wp-content/uploads/2016/11/bryan-300x300.jpg'
        },

        {
            name: 'Russian Blue',
            image: 'https://www.buzzle.com/images/cats/russian-blue-kitten-on-blue-pillow.jpg'
        },

        {
            name: 'Siamese',
            image: 'http://www.breedlist.com/photos/aphoto/aspen-sia.jpg'
        },

        {
            name: 'Calico',
            image: 'http://www.cutestpaw.com/wp-content/uploads/2014/05/s-My-Sisters-Calico-Kitten.jpg'
        },
        {
            name: 'Bengal',
            image: 'http://www.eizz.us/wp-content/uploads/2017/10/pleasant-bengal-kitten-cute-wallpaper-4019-wallpaper-themes-collectwall-together-with-cute-bengal-kittens-wallpaper-300x300.jpg'
        }];

    //displays the image of a dog
    $scope.currentImage = '';
    $scope.imageDisplayerDog = function (selectedDog) {
   
        for (i = 0; i < $scope.dogBreeds.length; i++) {
            if ($scope.dogBreeds[i].name === selectedDog) {
                $scope.currentImage = $scope.dogBreeds[i].image;
            }
        }
        $('#petPicture').show(1);
        $('#startButton').show(1);
    }

    
    //displays an image of a cat
    $scope.imageDisplayerCat = function (selectedCat) {

        for (i = 0; i < $scope.catBreeds.length; i++) {
            if ($scope.catBreeds[i].name === selectedCat) {
                $scope.currentImage = $scope.catBreeds[i].image;
            }
        }
        $('#petPicture').show(1);
        $('#startButton').show(1);
    }

    //user selects a dog
    $scope.setSpeciesDog = function() {
        $scope.species = 'Dog';
        $('#breedSelectorDog').show(1)
        $('#breedSelectorCat').hide(1);
        $('#displayselectedCat').hide(1);
        $('#displayselectedDog').show(1);
    }

    //user selects a cat
    $scope.setSpeciesCat = function () {
        $scope.species = 'Cat';
        $('#breedSelectorCat').show(1)
        $('#breedSelectorDog').hide(1);
        $('#displayselectedDog').hide(1);
        $('#displayselectedCat').show(1);
    }

    //when the pet is finalized and the Start Button is pressed
    $scope.startPetFunctions = function () {
        $('#startButton').hide(1);
        $('.dissappearAfterStart').hide(1);
        $('.petController').show(1);

        //Hunger Controls
        $scope.hungerLevel = 1;
        $scope.petMessages = '';
        function updateHungerLevel() {
            $scope.hungerLevel++;
            $('#petMessageDisplay').hide(1);
            $timeout(updateHungerLevel, 2000000);

            

            // Pet runs away after hunger level equals 11
            if ($scope.hungerLevel == 8) {
                $('#hungerLevelNumber').css('font-size', '130%');
            } else if ($scope.hungerLevel == 9) {
                $('#hungerLevelNumber').css('font-size', '160%');
            } else if ($scope.hungerLevel == 11) {
                $('#hungerLevelNumber').hide(1);
                alert("You forgot to feed your pet! They ran away :(");
                location.reload();
            }
        }
        updateHungerLevel();

        //Feeding the pet
        $scope.feedYourPet = function () {
            $scope.hungerLevel--;
            if ($scope.species === 'Cat') {
                $scope.petMessages = 'Meow!'
                $('#petMessageDisplay').show(1);
            } else if ($scope.species === 'Dog') {
                $scope.petMessages = 'Woof!'
                $('#petMessageDisplay').show(1);
            }
        }


        //Happiness Controls
        $scope.happinessLevel = 9;
        function updateHappinessLevel() {
            $scope.happinessLevel--;
            $timeout(updateHappinessLevel, 5010000);

            if ($scope.happinessLevel == 2) {
                $('#happinessLevelNumber').css('font-size', '130%');
            } else if ($scope.happinessLevel == 1) {
                $('#happinessLevelNumber').css('font-size', '160%');
            } else if ($scope.happinessLevel == 0) {
                $('#happinessLevelNumber').hide(1);
                alert("You never played with your pet! They ran away :(");
                location.reload();
            }
        }
        updateHappinessLevel();

        //Playing with the pet
        $scope.playWithPet = function () {
            $scope.happinessLevel++;
            if ($scope.species === 'Cat') {
                $scope.petMessages = 'Meow!'
                $('#petMessageDisplay').show(1);
            } else if ($scope.species === 'Dog') {
                $scope.petMessages = 'Woof!'
                $('#petMessageDisplay').show(1);
            }
        }
        
    }



});