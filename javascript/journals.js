var intersect_journals = {
    "list": ['aac.asm.org','aapredbook.aappublications.org','acb.rsmjournals.com','acn.oxfordjournals.org','acsinfo.acs.org','adc.bmj.com','adisonline.com','advan.physiology.org','adv.medicaljournals.se','aem.asm.org','ageing.oxfordjournals.org','aja.asha.org','ajcp.ascpjournals.org','aje.oxfordjournals.org','ajh.sagepub.com','ajpcell.physiology.org','ajpendo.physiology.org','ajpgi.physiology.org','ajph.aphapublications.org','ajpheart.physiology.org','ajplegacy.physiology.org','ajplung.physiology.org','ajp.psychiatryonline.org','ajpregu.physiology.org','ajprenal.physiology.org','ajrccm.atsjournals.org','ajrcmb.atsjournals.org','ajslp.asha.org','alcalc.oxfordjournals.org','annhyg.oxfordjournals.org','annonc.oxfordjournals.org','ap.psychiatryonline.org','archderm.ama-assn.org','archfaci.ama-assn.org','archfami.ama-assn.org','archinte.ama-assn.org','archneur.ama-assn.org','archneurpsyc.ama-assn.org','archopht.ama-assn.org','archotol.ama-assn.org','archpedi.ama-assn.org','archpsyc.ama-assn.org','archsurg.ama-assn.org','ard.bmj.com','ar.rsmjournals.com','asa.aip.org','asmedl.aip.org','atvb.ahajournals.org','baywood.metapress.com','bfg.oxfordjournals.org','bib.oxfordjournals.org','bioinformatics.oxfordjournals.org','biomedgerontology.oxfordjournals.org','biomet.oxfordjournals.org','biostatistics.oxfordjournals.org','bja.oxfordjournals.org','bjo.bmj.com','bjp.rcpsych.org','bjr.birjournals.org','bloodjournal.hematologylibrary.org','bmb.oxfordjournals.org','bmjopen.bmj.com','brain.oxfordjournals.org','breast-cancer-research.com','cancerdiscovery.aacrjournals.org','cancerpreventionresearch.aacrjournals.org','cancerres.aacrjournals.org','canreviews.aacrjournals.org','caonline.amcancersoc.org','carcin.oxfordjournals.org','cardiovascres.oxfordjournals.org','care.diabetesjournals.org','ccforum.com','ccl.sagepub.com','cco.cambridge.org','cebp.aacrjournals.org','cercor.oxfordjournals.org','chemse.oxfordjournals.org','cid.oxfordjournals.org','circ.ahajournals.org','circep.ahajournals.org','circgenetics.ahajournals.org','circheartfailure.ahajournals.org','circimaging.ahajournals.org','circinterventions.ahajournals.org','circoutcomes.ahajournals.org','circres.ahajournals.org','cjasn.asnjournals.org','clincancerres.aacrjournals.org','clinical.diabetesjournals.org','clinicalevidence.bmj.com','cmr.asm.org','content.healthaffairs.org','content.karger.com','cshperspectives.cshlp.org','cshprotocols.cshlp.org','cvi.asm.org','dev.biologists.org','diabetes.diabetesjournals.org','digital.library.pitt.edu','dmd.aspetjournals.org','dmfr.birjournals.org','dmm.biologists.org','dukejournals.org','dx.doi.org','ebm.bmj.com','ebm.rsmjournals.com','ec.asm.org','edrv.endojournals.org','ejechocard.oxfordjournals.org','ejo.oxfordjournals.org','emj.bmj.com','endo.endojournals.org','enterprise.astm.org','ep.bmj.com','epirev.oxfordjournals.org','ep.physoc.org','epubs.siam.org','erc.endocrinology-journals.org','erj.ersjournals.com','err.ersjournals.com','eshremonographs.oxfordjournals.org','eurheartj.oxfordjournals.org','eurheartjsupp.oxfordjournals.org','eurjhf.oxfordjournals.org','eurjhfsupp.oxfordjournals.org','europace.oxfordjournals.org','f1000.com','fampra.oxfordjournals.org','fg.bmj.com','firstsearch.oclc.org','fn.bmj.com','focus.psychiatryonline.org','gateway.ovid.com','genesdev.cshlp.org','genomebiology.com','genome.cshlp.org','gerontologist.oxfordjournals.org','glycob.oxfordjournals.org','gut.bmj.com','heart.bmj.com','heinonline.org','highwire.stanford.edu','hmg.oxfordjournals.org','humrep.oxfordjournals.org','humupd.oxfordjournals.org','hyper.ahajournals.org','iai.asm.org','icvts.ctsnetjournals.org','ieeexplore.ieee.org','ije.oxfordjournals.org','ijs.sgmjournals.org','imaging.birjournals.org','informahealthcare.com','info.sciencedirect.com','infotrac.galegroup.com','intimm.oxfordjournals.org','intqhc.oxfordjournals.org','iopscience.iop.org','iospress.metapress.com','jac.oxfordjournals.org','jada.ada.org','jama.ama-assn.org','jamia.bmj.com','jap.physiology.org','jas.fass.org','jasn.asnjournals.org','jb.asm.org','jb.oxfordjournals.org','jcb.rupress.org','jcem.endojournals.org','jcm.asm.org','jco.ascopubs.org','jcp.bmj.com','jcs.biologists.org','jdsde.oxfordjournals.org','jeb.biologists.org','jech.bmj.com','jem.rupress.org','jgp.rupress.org','jhc.sagepub.com','jhered.oxfordjournals.org','jhmas.oxfordjournals.org','jhppl.dukejournals.org','jid.oxfordjournals.org','jimmunol.org','jjco.oxfordjournals.org','jmb.rsmjournals.com','jmcb.oxfordjournals.org','jme.bmj.com','jme.endocrinology-journals.org','jmg.bmj.com','jmicro.oxfordjournals.org','jmm.sgmjournals.org','jmp.oxfordjournals.org','jncimono.oxfordjournals.org','jnci.oxfordjournals.org','jnis.bmj.com','jnm.snmjournals.org','jnnp.bmj.com','jn.nutrition.org','jn.physiology.org','joe.endocrinology-journals.org','jorthod.maneyjournals.org','journals.bcdecker.com','journals.cambridge.org','journalsip.astm.org','journals.iucr.org','jpet.aspetjournals.org','jp.physoc.org','jppr.psychiatryonline.org','jpubhealth.oxfordjournals.org','jrn.sagepub.com','jrsm.rsmjournals.com','jshd.asha.org','jslhr.asha.org','jtt.rsmjournals.com','jvi.asm.org','learnmem.cshlp.org','lib.myilibrary.com','link.aip.org','link.springer-ny.com','lshss.asha.org','mbe.oxfordjournals.org','mbio.asm.org','mcb.asm.org','mcr.aacrjournals.org','mct.aacrjournals.org','mend.endojournals.org','mesharpe.metapress.com','mh.bmj.com','mic.sgmjournals.org','mmbr.asm.org','molehr.oxfordjournals.org','molpharm.aspetjournals.org','mp.bmj.com','muse.jhu.edu','mutage.oxfordjournals.org','name.umdl.umich.edu','nar.oxfordjournals.org','nas.sagepub.com','nass.oxfordjournals.org','ndt.oxfordjournals.org','ndtplus.oxfordjournals.org','neoreviews.aappublications.org','neuro-oncology.oxfordjournals.org','neuro.psychiatryonline.org','news.sciencemag.org','npg.nature.com','ntr.oxfordjournals.org','oem.bmj.com','ohr.oxfordjournals.org','ojps.aip.org','onlinelibrary.wiley.com','online.sagepub.com','online.statref.com','ovidsp.ovid.com','pats.atsjournals.org','pediatrics.aappublications.org','pedsinreview.aappublications.org','peds.oxfordjournals.org','pharmrev.aspetjournals.org','physiolgenomics.physiology.org','physiologyonline.physiology.org','physrev.physiology.org','pmj.bmj.com','pn.bmj.com','pn.psychiatryonline.org','preventionportal.aacrjournals.org','proceedings.jbjs.org.uk','prola.aps.org','proquest.safaribooksonline.com','proquest.umi.com','psychservices.psychiatryonline.org','psychsocgerontology.oxfordjournals.org','psy.psychiatryonline.org','publish.aps.org','pubs.acs.org','pubs.ama-assn.org','pubs.amstat.org','qjmed.oxfordjournals.org','qualitysafety.bmj.com','radiographics.rsna.org','radiology.rsna.org','rheumatology.oxfordjournals.org','rnajournal.cshlp.org','ror.reproduction-online.org','rphr.endojournals.org','rsbl.royalsocietypublishing.org','rsfs.royalsocietypublishing.org','rsif.royalsocietypublishing.org','rsnr.royalsocietypublishing.org','rspb.royalsocietypublishing.org','rstb.royalsocietypublishing.org','sageke.sciencemag.org','schizophreniabulletin.oxfordjournals.org','scitation.aip.org','search.ebscohost.com','shm.oxfordjournals.org','shortreports.rsmjournals.com','site.ebrary.com','smj.rsmjournals.com','spectrum.diabetesjournals.org','sti.bmj.com','stke.sciencemag.org','stm.sciencemag.org','stroke.ahajournals.org','symposia.biochemistry.org','symposium.cshlp.org','tde.sagepub.com','theoncologist.alphamedpress.org','thomasland.metapress.com','thorax.bmj.com','toxsci.oxfordjournals.org','tpx.sagepub.com','tropej.oxfordjournals.org','vascular.rsmjournals.com','vet.sagepub.com','vir.sgmjournals.org','vmj.sagepub.com','vnweb.hwwilsonweb.com','web.jbjs.org.uk','wires.wiley.com','wustl.library.ingentaconnect.com','www3.interscience.wiley.com','www.aacp.com','www.aacr.org','www.aasmnet.org','www.accessmedicine.com','www.advancesinpd.com','www.ajcn.org','www.ajnr.org','www.ajronline.org','www.ajtmh.org','www.ala.org','www.ama-assn.org','www.amamanualofstyle.com','www.anesthesia-analgesia.org','www.annals.org','www.annclinlabsci.org','www.annfammed.org','www.annualreviews.org','www.aps.org','www.atypon-link.com','www.bepress.com','www.biochemj.org','www.biochemsoctrans.org','www.biolcell.org','www.biological-markers.com','www.biologists.com','www.biolreprod.org','www.biomedcentral.com','www.bioone.org','www.bioscience.org','www.bioscirep.org','www.biotechniques.com','www.bmj.com','www.cellbiolint.org','www.clinchem.org','www.clinsci.org','www.cmaj.ca','www.cshprotocols.org','www.eje-online.org','www.emeraldinsight.com','www.endocrine-abstracts.org','www.fasebj.org','www.genetics.org','www.guttmacher.org','www.heinonline.org','www.historycooperative.org','www.ieee.org','www.ietdl.org','www.ijdb.ehu.es','www.informaworld.com','www.ingentaconnect.com','www.iop.org','www.iovs.org','www.jaaos.org','www.jacn.org','www.jaoa.org','www.japmaonline.org','www.jbc.org','www.jbjs.org','www.jci.org','www.jleukbio.org','www.jlr.org','www.jnccn.org','www.jneurosci.org','www.journals.asm.org','www.jove.com','www.jsad.com','www.jstage.jst.go.jp','www.jstor.org','www.jultrasoundmed.org','www.karger.com','www.landesbioscience.com','www.lexis-nexis.com','www.liebertonline.com','www.mayoclinicproceedings.com','www.mcponline.org','www.mdconsult.com','www.medicaljournals.se','www.metapress.com','www.mitpressjournals.org','www.molbiolcell.org','www.myilibrary.com','www.nature.com','www.nejm.org','www.netlibrary.com','www.neurology.org','www.nrcresearchpress.com','www.onlinelibrary.wiley.com','www.opticsinfobase.org','www.oxfordjournals.org','www.pdiconnect.com','www.perceptionweb.com','www.pnas.org','www.portico.org','www.press.uillinois.edu','www.psychiatrist.com','www.psychiatryonline.com','www.psychiatryonline.org','www.psychosomaticmedicine.org','www.publichealthreports.org','www.publish.csiro.au','www.r2library.com','www.rcjournal.com','www.reference-global.com','www.reproduction-online.org','www.rsc.org','www.sciencedirect.com','www.sciencemag.org','www.sjweh.fi','www.springerlink.com','www.springerprotocols.com','www.theannals.com','www.the-aps.org','www.thecochranelibrary.com','www.the-scientist.com','www.thieme-connect.com','www.worldscinet.com','xlink.rsc.org']
};
var becker_journals = {
    "list": ['aahm.press.jhu.edu','aidscience.org','ajol.info','ajot.aotapress.net','annals.edu.sg','apps.who.int','archive.ammonsscientific.com','ar.iiarjournals.org','arthritis-research.com','books.nap.edu','ccn.aacnjournals.org','cgd.aacrjournals.org','chestjournal.chestpubs.org','cigjournals.metapress.com','cimonline.ca','dermatology.cdlib.org','ebooks.thieme.com','ejournals.library.ualberta.ca','epe.lac-bac.gc.ca','fb.cuni.cz','funpecrp.com.br','general-medicine.jwatch.org','genomemedicine.com','hormones.gr','info.k4health.org','jrm.medicaljournals.se','koha.wustl.edu','memo.cgu.edu.tw','mj.med.u-tokai.ac.jp','molcells.inforang.com','monographs.iarc.fr','nursingstandard.rcnpublishing.co.uk','ousar.lib.okayama-u.ac.jp','pharmacotherapyjournal.org','psychiatryinvestigation.org','psychiatryonline.com','psychnews.org','ptjournal.apta.org','publications.cpa-apc.org','purl.access.gpo.gov','rbm.acrl.org','secure.medicalletter.org','sgo.sagepub.com','stfm.org','thecarlatreport.com','thejns.org','webio.hu','www.aafp.org','www.acpjc.org','www.actabiomedica.it','www.acta-cytol.com','www.aepress.sk','www.afb.org','www.afrjpaedsurg.org','www.ahcpub.com','www.aidsreviews.com','www.aite.wroclaw.pl','www.ajhp.org','www.ajts.org','www.altmedrev.com','www.amjorthopedics.com','www.amsciepub.com','www.annalsafrmed.org','www.annals.com','www.annals.in','www.annalsofian.org','www.annalspc.com','www.apfmj-archive.com','www.apocp.org','www.archivesofpathology.org','www.arl.org','www.artificial-organs.com','www.asiapharmaceutics.info','www.asnneuro.org','www.astmh.org','www.audiologyresearch.org','www.biodiversitylibrary.org','www.biosciencetrends.com','www.biotechnologyhealthcare.com','www.cancerimmunity.org','www.cancerjournal.net','www.cancernetwork.com','www.caot.ca','www.carcinogenesis.com','www.ccjm.org','www.cellbiolintrep.org','www.cellmolbiol.com','www.chausa.org','www.chemsources.com','www.cjcp.ca','www.cjem-online.ca','www.clinexprheumatol.org','www.clinicalethics.com','www.clinmedres.org','www.cma.ca','www.cmbl.org.pl','www.cmj.hr','www.cmj.org','www.cpb.ouhsc.edu','www.cpcjournal.org','www.cshlpress.com','www.cutis.com','www.cytojournal.com','www.dmphp.org','www.dustri.com','www.ecmjournal.org','www.ectrx.org','www.ecv.de','www.e-emm.org','www.e-ijd.org','www.elis.sk','www.eubios.info','www.eur-j-ophthalmol.com','www.expert-reviews.com','www.exp-oncology.com.ua','www.eyesite.ca','www.facs.org','www.fah.org','www.foodandnutritionresearch.net','www.freemedicaljournals.com','www.futuremedicine.com','www.future-science.com','www.greenpharmacy.info','www.gynecendoscopy.org','www.haematologica.org','www.hbpdint.com','www.heartviews.org','www.hellenicjcardiol.com','www.hepatitisbannual.org','www.hhrjournal.org','www.hh.um.es','www.hip-int.com','www.hkmj.org','www.horizonpress.com','www.hsforum.com','www.iasusa.org','www.iavireport.org','www.icddrb.org','www.icmpe.org','www.icmr.nic.in','www.icr-heart.com','www.ifo.it','www.ijaronline.com','www.ijaweb.org','www.ijccm.org','www.ijch.fi','www.ijcm.org.in','www.ijdvl.com','www.ijem.in','www.ijhg.com','www.ijmm.org','www.ijmpo.org','www.ijnm.in','www.ijoem.com','www.ijo.in','www.ijoonline.com','www.ijpm.info','www.ijpmonline.org','www.ijp-online.com','www.ijpsonline.com','www.ijps.org','www.ijri.org','www.ijstd.org','www.ijtrichology.com','www.ima.org.il','www.impactaging.com','www.impactjournals.com','www.inaactamedica.org','www.indianjcancer.com','www.indianjgastro.com','www.indianjmedsci.org','www.indianjnephrol.org','www.indianjpsychiatry.org','www.indianjurol.com','www.indianpediatrics.net','www.internationalshoulderjournal.org','www.invasivecardiology.com','www.ipej.org','www.ismni.org','www.jaapl.org','www.jabfm.org','www.jacmp.org','www.jaim.in','www.jcasonline.com','www.jcdronline.com','www.jcvjs.com','www.jcytol.org','www.jendocrinolinvest.it','www.jfponline.com','www.jgid.org','www.jgld.ro','www.jhrsonline.org','www.jiaps.com','www.jlponline.org','www.jmir.org','www.jmp.org.in','www.joacp.org','www.jomfp.in','www.joplink.net','www.joponline.org','www.jos.edu.au','www.josonline.org','www.jospt.org','www.journalarchive.jst.go.jp','www.journalofmas.com','www.journalofparasitology.org','www.journalofvision.org','www.journalsleep.org','www.jpalliativecare.com','www.jpands.org','www.jpbsonline.org','www.jpgmonline.com','www.jrheum.org','www.jsnm.org','www.kjronline.org','www.libraryjournal.com','www.lifescied.org','www.lungindia.com','www.maney.co.uk','www.mcmla.org','www.meajo.org','www.med.kobe-u.ac.jp','www.minervamedica.it','www.mja.com.au','www.mlanet.org','www.moffitt.org','www.mrcindia.org','www.nap.edu','www.neurologyindia.com','www.nih.go.jp','www.nmanet.org','www.noiseandhealth.org','www.nyuhjdbulletin.org','www.nzma.org.nz','www.ojoonline.org','www.onlinejets.org','www.orthosupersite.com','www.o-wm.com','www.pa2online.org','www.pagepress.org','www.painphysicianjournal.com','www.pediatricneurosciences.com','www.pedpath.org','www.phac-aspc.gc.ca','www.primarypsychiatry.com','www.psychiatry.org.il','www.pulsus.com','www.pvrireview.org','www.rcsed.ac.uk','www.reproductivemedicine.com','www.sage-hindawi.com','www.saudiannals.net','www.saudija.org','www.saudijgastro.com','www.schattauer.de','www.skintherapyletter.com','www.slackjournals.com','www.smw.ch','www.srm-ejournal.com','www.studiesinmycology.org','www.tcrt.org','www.thieme.de','www.thoracicmedicine.org','www.tinnitusjournal.com','www.toxicologyinternational.com','www.tumorionline.it','www.ualberta.ca','www.urologyannals.com']
};
var danforth_journals = {
    "list": ['aimsciences.org','annals.math.princeton.edu','app.harpweek.com','artfl-project.uchicago.edu','ascelibrary.org','aslo.org','asp6new.alexanderstreet.com','carbo.chemnetbase.com','ccd.chemnetbase.com','cnki.en.eastview.com','cnki.zh.eastview.com','dccc.chemnetbase.com','dfc.chemnetbase.com','digital.casalini.it','dioc.chemnetbase.com','dmnp.chemnetbase.com','dna.naver.com','dnp.chemnetbase.com','doc.chemnetbase.com','dod.chemnetbase.com','ecosal.org','ecsdl.org','hw.oeaw.ac.at','iimp.chadwyck.com','iipaft.chadwyck.com','infoweb.newsbank.com','journals.impan.gov.pl','library.cqpress.com','library.pressdisplay.com','lion.chadwyck.com','nationaljournal.com','poc.chemnetbase.com','poj.peeters-leuven.be','portal.acm.org','projecteuclid.org','royalsocietypublishing.org','rspa.royalsocietypublishing.org','rsta.royalsocietypublishing.org','sage-ereference.com','seab.envmed.rochester.edu','search.marquiswhoswho.com','smf.emath.fr','solomon.aadr.alexanderstreet.com','solomon.afso.alexanderstreet.com','solomon.bldr.alexanderstreet.com','solomon.nadr.alexanderstreet.com','solomon.nwld.alexanderstreet.com','solomon.wodr.alexanderstreet.com','spiedigitallibrary.org','wass.alexanderstreet.com','www.aaiddjournals.org','www.accessible.com','www.acm.org','www.actapress.com','www.aeaweb.org','www.agu.org','www.aiaa.org','www.ajhpcontents.com','www.amdigital.co.uk','www.ams.org','www.anthrosource.net','www.aspb.org','www.basarchive.org','www.ceeol.com','www.cepr.org','www.chemnetbase.com','www.ciaonet.org','www.cms.math.ca','www.crcnetbase.com','www.dbpia.co.kr','www.degruyter.de','www.ems-ph.org','www.equinoxpub.com','www.esajournals.org','www.geoscienceworld.org','www.humanitiesebook.org','www.humankinetics.com','www.intlpress.com','www.intphycsoc.org','www.lexisnexis.com','www.mathjournals.org','www.mathscipub.org','www.minsocam.org','www.mlajournals.org','www.nber.org','www.ncte.org','www.nowpublishers.com','www.oecd-ilibrary.org','www.oldcitypublishing.com','www.oldenbourg-link.com','www.oxfordartonline.com','www.oxfordislamicstudies.com','www.oxfordlanguagedictionaries.com','www.oxfordmusiconline.com','www.oxfordreference.com','www.oxfordscholarship.com','www.palgrave-journals.com','www.pdcnet.org','www.polymersdatabase.com','www.portlandpress.com','www.research-design.co.uk','www.sif.it','www.uwpress.org','www.v-r.de']
};
