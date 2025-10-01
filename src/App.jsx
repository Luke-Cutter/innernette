// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VistaLayout from './components/layout/VistaLayout';

// Core Pages
import InnernetteHome from './pages/core/InnernetteHome';
import InnernetteSettings from './pages/core/InnernetteSettings';
import InnernetteShopping from './pages/core/InnernetteShopping';
import NetteChat from './pages/core/NetteChat';
import NetteTunes from './pages/core/NetteTunes';
// Directory Category Pages
import Channel5HomePage from './pages/categories/channel5-and-friends/Channel5HomePage';
import CincoSubsidiariesPage from './pages/categories/cinco/CincoSubsidiariesPage';
import EntertainmentPage from './pages/categories/entertainment/EntertainmentPage';
import HealthPage from './pages/categories/health/HealthPage';
import TechHelpPage from './pages/categories/technology/TechHelpPage';
// Channel 5 and Friends
import Channel5News from './pages/categories/channel5-and-friends/Channel5News.jsx';
import CheckItOut from './pages/categories/channel5-and-friends/CheckItOut.jsx';
import UncleMusclesHour from './pages/categories/channel5-and-friends/UncleMusclesHour.jsx';
import KidBreak from './pages/categories/channel5-and-friends/KidBreak.jsx';
import ChildShowcase from './pages/categories/channel5-and-friends/ChildShowcase.jsx';
import TheSnuggler from './pages/categories/channel5-and-friends/TheSnuggler.jsx';
import TheJamesQuallStory from './pages/categories/channel5-and-friends/TheJamesQuallStory.jsx';
import MusclesForBones from './pages/categories/channel5-and-friends/MusclesForBones.jsx';
import StarkonStark from './pages/categories/channel5-and-friends/StarkonStark.jsx';
import FemininePerspectives from './pages/categories/channel5-and-friends/FemininePerspectives.jsx';
import CelebrityZillions from './pages/categories/channel5-and-friends/CelebrityZillions.jsx';
import JimandDerrick from './pages/categories/channel5-and-friends/JimandDerrick.jsx';
import NightsWithTim from './pages/categories/channel5-and-friends/NightsWithTim.jsx';
import SpookedBySpagett from './pages/categories/channel5-and-friends/SpookedBySpagett.jsx';
import CORBS from './pages/categories/channel5-and-friends/CORBS.jsx';
import Quallstions from './pages/categories/channel5-and-friends/Quallstions.jsx';
import HobbyHoles from './pages/categories/channel5-and-friends/HobbyHoles.jsx';
import TrickMyTrick from './pages/categories/channel5-and-friends/TrickMyTrick.jsx';
import WhoopsieDaisy from './pages/categories/channel5-and-friends/WhoopsieDaisy.jsx';
import AmateurPipes from './pages/categories/channel5-and-friends/AmateurPipes.jsx';
import JazzSessions from './pages/categories/channel5-and-friends/JazzSessions.jsx';
import AfternoonReview from './pages/categories/channel5-and-friends/AfternoonReview.jsx';
import TheNewYou from './pages/categories/channel5-and-friends/TheNewYou.jsx';
import QuallOfDuty from './pages/categories/channel5-and-friends/QuallOfDuty.jsx';
import WithWill from './pages/categories/channel5-and-friends/WithWill.jsx';

// Cinco Subsidiaries Pages
// Games & Toys
import CincoHoar from './pages/categories/cinco/cincotoys/CincoHoar.jsx';


// Innovation
import CincoCreditUnion from './pages/categories/cinco/cincoinnovation/CincoCreditUnion';
import CincoIdentityGenerator from './pages/categories/cinco/cincoinnovation/CincoIdentityGenerator';
import CincoMIDIOrganizer from './pages/categories/cinco/cincoinnovation/CincoMIDIOrganizer';
import CincoFactsMachine from './pages/categories/cinco/cincoinnovation/CincoFactsMachine';
import CincoETrial from './pages/categories/cinco/cincoinnovation/CincoETrial';
import CincoMuzikMayker from './pages/categories/cinco/cincoinnovation/CincoMuzikMayker';
import CincoMancierge from './pages/categories/cinco/cincoinnovation/CincoMancierge';
import CincoFotoFiddler from './pages/categories/cinco/cincoinnovation/CincoFotoFiddler.jsx';

//Cinco Toys
import CincoBowl from './pages/categories/cinco/cincotoys/CincoBowl.jsx';
import CincoDump from './pages/categories/cinco/cincotoys/CincoDump.jsx';
import CincoIJammer from './pages/categories/cinco/cincotoys/CincoIJammer.jsx';
import CincoTird from './pages/categories/cinco/cincotoys/CincoTird.jsx';
import CincoBougar from './pages/categories/cinco/cincotoys/CincoBougar.jsx';

//Cinco Style
import CincoBroche from './pages/categories/cinco/cincolifestyle/CincoBroche';
import CincoCBund from './pages/categories/cinco/cincolifestyle/CincoCBund.jsx';


//Health pages
import CincoBallsInsurance from './pages/categories/health/cincocares/CincoBallsInsurance';
import CincoEyeTanningSystem from './pages/categories/health/cincocares/CincoEyeTanningSystem';
import CincoFoodTube from './pages/categories/health/cincofood/CincoFoodTube';
import CleaningAfterCat from './pages/categories/health/CleaningAfterCat.jsx';
import TraggsTrough from './pages/categories/health/TraggsTrough.jsx';
//Entertainment pages
import ItsFreeRealEstate from './pages/categories/entertainment/ItsFreeRealEstate.jsx';
import DunnWithIt from './pages/categories/entertainment/DunnWithIt.jsx';
import PriceWarPage from './pages/categories/entertainment/PriceWarPage.jsx';
import BackToSquall from './pages/categories/entertainment/BackToSquall.jsx';
import PigMan from './pages/categories/entertainment/PigMan.jsx';
import PillgrumsMovie from './pages/categories/entertainment/PillgrumsMovie.jsx';
import SpagettMovie from './pages/categories/entertainment/SpagettMovie.jsx';
import CrystalShyps from './pages/categories/entertainment/CrystalShyps.jsx';
import TheUniverse from './pages/categories/entertainment/TheUniverse.jsx';
import FocusOnComedy from './pages/categories/entertainment/FocusOnComedy.jsx';
import JJPepper from './pages/categories/entertainment/JJPepper.jsx';
import GrobanSingsCasey from './pages/categories/entertainment/GrobanSingsCasey.jsx';
import TinyHats from './pages/categories/entertainment/TinyHats.jsx';
import TimAndEric from './pages/categories/entertainment/TimAndEric.jsx';
import WheresMyChippy from './pages/categories/entertainment/WheresMyChippy.jsx';

//Technical Pages
import BrownScreenCalibration from './pages/categories/technology/BrownScreenCalibration.jsx';
import ComputerExplosion from './pages/categories/technology/ComputerExplosion.jsx';
import GeneralQuestions from './pages/categories/technology/GeneralQuestions.jsx';
import InnernetteInstall from './pages/categories/technology/InnernetteInstall.jsx';
import MouseBallMaintenance from './pages/categories/technology/MouseBallMaintenance.jsx';
import NettesiteAccess from './pages/categories/technology/NettesiteAccess.jsx';
import NetteTunesSupport from './pages/categories/technology/NetteTunesSupport.jsx';
import PerformanceIssues from './pages/categories/technology/PerformanceIssues.jsx';
import SecurityConcerns from './pages/categories/technology/SecurityConcerns.jsx';
import UpgradeQuestions from './pages/categories/technology/UpgradeQuestions.jsx';
import CincoThocks from './pages/categories/cinco/cincolifestyle/CincoThocks.jsx';
import CincoMouthDecorator from './pages/categories/cinco/cincolifestyle/CincoMouthDecorator.jsx';
import CincoBoy from './pages/categories/cinco/cincotoys/CincoBoy.jsx';
import CincoNotJackieChan from './pages/categories/cinco/cincotoys/CincoNotJackieChan.jsx';
import MyNewPepPep from './pages/categories/cinco/cincotoys/MyNewPepPep.jsx';
import CincoTurboFuel from './pages/categories/health/cincofood/CincoTurboFuel.jsx';
import CincoNapple from './pages/categories/health/cincofood/CincoNapple.jsx';
import CincoPrivacyHelmet from './pages/categories/cinco/cincoinnovation/CincoPrivacyHelmet.jsx';
import CincoCFone from './pages/categories/cinco/cincoinnovation/CincoCFone.jsx';
import CincoVideoCube from './pages/categories/cinco/cincoinnovation/CincoVideoCube.jsx';
import TairyGreeneMachine from './pages/categories/entertainment/TairyGreeneMachine.jsx';
import CincoGriddleman from './pages/categories/health/cincofood/CincoGriddleman.jsx';
import CincoCigaretteJuice from './pages/categories/health/cincofood/CincoCigaretteJuice.jsx';
import CincoPastaBear from './pages/categories/health/cincofood/CincoPastaBear.jsx';
import CincoHamb from './pages/categories/health/cincofood/CincoHamb.jsx';
import CincoCandyTails from './pages/categories/health/cincofood/CincoCandyTails.jsx';
import CincoMyEggs from './pages/categories/health/cincofood/CincoMyEggs.jsx';
import CincoPoopTube from './pages/categories/health/cincocares/CincoPoopTube.jsx';
import CincoBoneCreation from './pages/categories/health/cincocares/CincoBoneCreation.jsx';
import CincoBusinessHugs from './pages/categories/health/cincocares/CincoBusinessHugs.jsx';
import CincoFaceTimePartySnoozer from './pages/categories/health/cincocares/CincoFaceTimePartySnoozer.jsx';
import CincoSleepChair from './pages/categories/health/cincocares/CincoSleepChair.jsx';
import CincoUrinalShower from './pages/categories/health/cincocares/CincoUrinalShower.jsx';
import CincoDPants from './pages/categories/health/cincocares/CincoDPants.jsx';
import CincoDreamCream from './pages/categories/health/cincocares/CincoDreamCream.jsx';
import CincoEZKreme from './pages/categories/health/cincocares/CincoEZKreme.jsx';
import CincoManNip from './pages/categories/health/cincocares/CincoManNip.jsx';
import CincoWaitMate from './pages/categories/health/cincocares/CincoWaitMate.jsx';
import CincoFitnessEZ from './pages/categories/entertainment/CincoFitnessEZ.jsx';
import BestOfQuall from './pages/categories/entertainment/BestOfQuall.jsx';
import CincoNumberEncyclopedia from './pages/categories/cinco/cincoinnovation/CincoNumberEncyclopedia.jsx';
import BeaverBoys from './pages/categories/entertainment/BeaverBoys.jsx';
import DavidLiebeHart from './pages/categories/entertainment/DavidLiebeHart.jsx';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/*" element={<VistaLayout />}>
          <Route path="home" element={<InnernetteHome />} />
          <Route path="Channel5HomePage" element={<Channel5HomePage />} />
          <Route path="subsidiaries" element={<CincoSubsidiariesPage />} />
          <Route path="entertainment" element={<EntertainmentPage />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="help" element={<TechHelpPage />} />
          <Route path="NetteChat" element={<NetteChat />} />
          <Route path="NetteTunes" element={<NetteTunes />} />
          <Route path = "InnernetteSettings" element={<InnernetteSettings />}/>
          <Route path = "InnernetteShopping" element={<InnernetteShopping />}/>
          <Route path = "CincoCreditUnion" element={<CincoCreditUnion/>}/>
          <Route path = "CincoIdentityGenerator" element={<CincoIdentityGenerator/>}/>
          <Route path = "CincoMIDIOrganizer" element={<CincoMIDIOrganizer/>}/>
          <Route path = "CincoMuzikMayker" element={<CincoMuzikMayker/>}/>
          <Route path = "CincoFotoFiddler" element={<CincoFotoFiddler/>}/>
          <Route path = "CincoFactsMachine" element={<CincoFactsMachine/>}/>
          <Route path = "CincoETrial" element={<CincoETrial/>}/>
          <Route path = "CincoBallsInsurance" element={<CincoBallsInsurance/>}/>
          <Route path = "CincoEyeTanningSystem" element={<CincoEyeTanningSystem/>}/>
          <Route path = "CincoMancierge" element={<CincoMancierge/>}/>
          <Route path = "CincoHoar" element={<CincoHoar/>}/>
          <Route path = "CheckItOut" element={<CheckItOut/>}/>
          <Route path = "CincoBroche" element={<CincoBroche/>}/>
          <Route path = "CincoBougar" element={<CincoBougar/>}/>
          <Route path = "CincoBowl" element={<CincoBowl/>}/>
          <Route path = "CincoDump" element={<CincoDump/>}/>
          <Route path = "CincoIJammer" element={<CincoIJammer/>}/>
          <Route path = "CincoTird" element={<CincoTird/>}/>
          <Route path = "CincoBoy" element={<CincoBoy/>}/>
          <Route path = "CincoNotJackieChan" element={<CincoNotJackieChan/>}/>
          <Route path = "MyNewPepPep" element={<MyNewPepPep/>}/>
          <Route path = "CincoPrivacyHelmet" element={<CincoPrivacyHelmet/>}/>
          <Route path = "CincoCFone" element={<CincoCFone/>}/>
          <Route path = "CincoVideoCube" element={<CincoVideoCube/>}/>
          <Route path = "CincoNumberEncyclopedia" element={<CincoNumberEncyclopedia/>}/>
          {/* Cinco Style */}
          <Route path = "CincoCBund" element={<CincoCBund/>}/>
          <Route path = "CincoThocks" element={<CincoThocks/>}/>
          <Route path = "CincoMouthDecorator" element={<CincoMouthDecorator/>}/>
          {/* Channel 5 Pages */}
          <Route path = "UncleMusclesHour" element={<UncleMusclesHour/>}/>
          <Route path = "Channel5News" element={<Channel5News/>}/>
          <Route path = "KidBreak" element={<KidBreak/>}/>
          <Route path = "ChildShowcase" element={<ChildShowcase/>}/>
          <Route path = "MusclesForBones" element={<MusclesForBones/>}/>
          <Route path = "TheJamesQuallStory" element={<TheJamesQuallStory/>}/>
          <Route path = "TheSnuggler" element={<TheSnuggler/>}/>
          <Route path = "StarkonStark" element={<StarkonStark/>}/>
          <Route path = "FemininePerspectives" element={<FemininePerspectives/>}/>
          <Route path = "CelebrityZillions" element={<CelebrityZillions/>}/>
          <Route path = "JimandDerrick" element={<JimandDerrick/>}/>
          <Route path = "CORBS" element={<CORBS/>}/>
          <Route path = "Quallstions" element={<Quallstions/>}/>
          <Route path = "HobbyHoles" element={<HobbyHoles/>}/>
          <Route path = "TrickMyTrick" element={<TrickMyTrick/>}/>
          <Route path = "WhoopsieDaisy" element={<WhoopsieDaisy/>}/>
          <Route path = "AmateurPipes" element={<AmateurPipes/>}/>
          <Route path = "JazzSessions" element={<JazzSessions/>}/>
          <Route path = "AfternoonReview" element={<AfternoonReview/>}/>
          <Route path = "TheNewYou" element={<TheNewYou/>}/>
          <Route path = "QuallofDuty" element={<QuallOfDuty/>}/>
          <Route path = "WithWill" element={<WithWill/>}/>
          <Route path = "NightsWithTim" element={<NightsWithTim/>}/>
          <Route path = "SpookedBySpagett" element={<SpookedBySpagett/>}/>
          {/* Entertainment Pages */}
          <Route path = "ItsFreeRealEstate" element={<ItsFreeRealEstate/>}/>
          <Route path = "DunnWithIt" element={<DunnWithIt/>}/>
          <Route path = "TimsDiscountPricesVersusEricsPremiumPrices" element={<PriceWarPage/>}/>
          <Route path = "BackToSquall" element={<BackToSquall/>}/>
          <Route path = "CrystalShyps" element={<CrystalShyps/>}/>
          <Route path = "PigMan" element={<PigMan/>}/>
          <Route path = "PillgrumsMovie" element={<PillgrumsMovie/>}/>
          <Route path = "SpagettMovie" element={<SpagettMovie/>}/>
          <Route path = "TheUniverse" element={<TheUniverse/>}/>
          <Route path = "FocusOnComedy" element={<FocusOnComedy/>}/>
          <Route path = "GrobanSingsCasey" element={<GrobanSingsCasey/>}/>
          <Route path = "JJPepper" element={<JJPepper/>}/>
          <Route path = "TairyGreeneMachine" element={<TairyGreeneMachine/>}/>
          <Route path = "CincoFitnessEZ" element={<CincoFitnessEZ/>}/>
          <Route path = "BestOfQuall" element={<BestOfQuall/>}/>
          <Route path = "BeaverBoys" element={<BeaverBoys/>}/>
          <Route path = "DavidLiebeHart" element={<DavidLiebeHart/>}/>
          <Route path = "TinyHats" element={<TinyHats/>}/>
          <Route path = "TimAndEric" element={<TimAndEric/>}/>
          <Route path = "WheresMyChippy" element={<WheresMyChippy/>}/>
          {/* Health Pages*/}
          <Route path = "CincoFoodTube" element={<CincoFoodTube/>}/>
          <Route path = "TraggsTrough" element={<TraggsTrough/>}/>
          <Route path = "CleaningAfterCat" element={<CleaningAfterCat/>}/>
          <Route path = "CincoTurboFuel" element={<CincoTurboFuel/>}/>
          <Route path = "CincoNapple" element={<CincoNapple/>}/>
          <Route path = "CincoGriddleman" element={<CincoGriddleman/>}/>
          <Route path = "CincoCigaretteJuice" element={<CincoCigaretteJuice/>}/>
          <Route path = "CincoPastaBear" element={<CincoPastaBear/>}/>
          <Route path = "CincoHamb" element={<CincoHamb/>}/>
          <Route path = "CincoCandyTails" element={<CincoCandyTails/>}/>
          <Route path = "CincoMyEggs" element={<CincoMyEggs/>}/>
          <Route path = "CincoPoopTube" element={<CincoPoopTube/>}/>
          <Route path = "CincoBoneCreation" element={<CincoBoneCreation/>}/>
          <Route path = "CincoBusinessHugs" element={<CincoBusinessHugs/>}/>
          <Route path = "CincoFaceTimePartySnoozer" element={<CincoFaceTimePartySnoozer/>}/>
          <Route path = "CincoSleepChair" element={<CincoSleepChair/>}/>
          <Route path = "CincoUrinalShower" element={<CincoUrinalShower/>}/>
          <Route path = "CincoDPants" element={<CincoDPants/>}/>
          <Route path = "CincoDreamCream" element={<CincoDreamCream/>}/>
          <Route path = "CincoEZKreme" element={<CincoEZKreme/>}/>
          <Route path = "CincoManNip" element={<CincoManNip/>}/>
          <Route path = "CincoWaitMate" element={<CincoWaitMate/>}/>
          <Route path = "CincoEZKreme" element={<CincoEZKreme/>}/>
          {/*Tech Support Pages*/}
          <Route path = "BrownScreenCalibration" element={<BrownScreenCalibration/>}/>
          <Route path = "ComputerExplosion" element={<ComputerExplosion/>}/>
          <Route path = "GeneralQuestions" element={<GeneralQuestions/>}/>
          <Route path = "InnernetteInstall" element={<InnernetteInstall/>}/>
          <Route path = "MouseBallMaintenance" element={<MouseBallMaintenance/>}/>
          <Route path = "NettesiteAccess" element={<NettesiteAccess/>}/>
          <Route path = "NetteTunesSupport" element={<NetteTunesSupport/>}/>
          <Route path = "PerformanceIssues" element={<PerformanceIssues/>}/>
          <Route path = "SecurityConcerns" element={<SecurityConcerns/>}/>
          <Route path = "UpgradeQuestions" element={<UpgradeQuestions/>}/>
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;