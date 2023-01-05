# Notes on the Sign-Up form Project for TOP

## Actions

- [x] Sketch elements on page for flex layout

- [ ] Add a README.MD
- [ ] Visual indicator invalid entry
- [ ] JS password check
- [ ] Edit pop ups for required fields and formats
- [ ] Look into autocomplete yellow background in safari behavior
 
## 2022110601
- I will start by sketching out the different sections on top of the [project example file](./PROJECT-EXAMPLE-sign-up-form.png) in ProCreate on my iPad. I already noticed some design alterations I would like to make and might sketch those in as well.

## 2022110701
- Downloaded Image by Mak [here](https://unsplash.com/photos/RlxP6WGmfP0)
- Starting with the basic layout today
- Changed image to typewriter by [Florian Klauer](https://unsplash.com/photos/mk7D-4UCfmg)
- Added a logo section
- Noticed the left flex item `.left-side` gets wider when the font size of `.logo-banner` increases. May need to look into that. 

## 2022111001
- Added styling
- Switch to Montserrat font https://fonts.google.com/specimen/Montserrat

## 2023010301
- Opened the project for the first time again after my winter break. Will look into the invalid entry indicators first to finetune since it seems I already sort of got that to work for the name field. 

## 2023010501
- I'm making a start to add an error color on the required fields today until they're filled out correctly.
- Took some fiddling to validate during input since it also okayed blank spaces. I added a check by trimming and checking if the value wasn't empty after trim. 
- [ ] consider regex for first name validity check special symbols/characters
- [ ] check twitter thread on validation best pratices.