"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Info,
  Calendar,
  Leaf,
  MapPin,
  Mail,
  ChevronDown,
  Camera,
  GraduationCap,
  Building2,
  User,
  HomeIcon,
} from "lucide-react"

export default function HomePage() {
  // Jednoduchá funkcia pre cesty k obrázkom
  const getImageSrc = (imageName: string) => {
    const basePath = process.env.NODE_ENV === "production" ? "/gromanka" : ""
    return `${basePath}/images/${imageName}`
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const galleryImages = [
    {
      src: "hrabkov-panorama.jpeg",
      title: "Panoráma Hrabkova",
      desc: "Nádherný výhľad na obec a okolie",
    },
    {
      src: "hrabkov-mountain.jpeg",
      title: "Hory pri Hrabkove",
      desc: "Majestátne pohorie obklopujúce obec",
    },
    {
      src: "hrabkov-village.jpeg",
      title: "Obec Hrabkov",
      desc: "Pohľad na centrum obce",
    },
    {
      src: "hrabkov-fields.jpeg",
      title: "Polia pri Hrabkove",
      desc: "Rozľahlé polia v okolí obce",
    },
    {
      src: "hrabkov-rock.jpeg",
      title: "Prírodné útvary",
      desc: "Zaujímavé skalné formácie v okolí",
    },
    {
      src: "hrabkov-aerial.jpeg",
      title: "Letecký pohľad",
      desc: "Obec Hrabkov z vtáčej perspektívy",
    },
    {
      src: "hrabkov-view.jpeg",
      title: "Výhľad na obec",
      desc: "Krásny pohľad na Hrabkov",
    },
    {
      src: "hrabkov-autumn.jpeg",
      title: "Jesenné farby",
      desc: "Hrabkov v jesennom období",
    },
    {
      src: "hrabkov-ruins.jpeg",
      title: "Historické pamiatky",
      desc: "Pozostatky histórie obce",
    },
  ]

  return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white" id="home">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
                src={getImageSrc("hrabkov-panorama.jpeg") || "/placeholder.svg"}
                alt="Panoráma obce Hrabkov"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-950/60 to-blue-950/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400">Gromanka</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 drop-shadow-md">Občianske združenie</h2>
              <p className="text-xl text-white/90 max-w-2xl mb-8 drop-shadow-sm">
                Rozvíjame kultúrno-spoločenské aktivity a chránime životné prostredie v obci Hrabkov
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                    onClick={() => scrollToSection("o-nas")}
                    size="lg"
                    className="bg-sky-600 hover:bg-sky-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-600/20"
                >
                  O združení
                </Button>
                <Button
                    onClick={() => scrollToSection("aktivity")}
                    size="lg"
                    variant="outline"
                    className="text-sky-600 border-white hover:text-white hover:bg-white/20 hover:border-sky-300 transition-all duration-300 hover:scale-105"
                >
                  Naše aktivity
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <button onClick={() => scrollToSection("o-nas")} className="hover:text-sky-300 transition-colors">
              <ChevronDown size={36} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-gradient-to-b from-white to-sky-50" id="o-nas">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2" data-aos="fade-right">
                <div className="inline-block mb-6 px-4 py-1 bg-sky-100 rounded-full text-sky-700 font-medium">O nás</div>
                <h2 className="text-4xl font-bold text-blue-950 mb-6 leading-tight">
                  O združení{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                  Gromanka
                </span>
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Občianske združenie Gromanka bolo založené s cieľom podporovať a rozvíjať kultúrno-spoločenské aktivity
                  v obci Hrabkov, ako aj chrániť jej jedinečné prírodné prostredie.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Naším poslaním je zachovávať historické a kultúrne dedičstvo obce, organizovať vzdelávacie a
                  environmentálne aktivity a prispievať k zveľaďovaniu obce Hrabkov.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-blue-700 bg-white p-3 rounded-lg shadow-sm">
                    <MapPin size={20} className="text-sky-600" />
                    <span>Napájadlá 5, 2277/5, 040 22, Košice</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700 bg-white p-3 rounded-lg shadow-sm">
                    <Mail size={20} className="text-sky-600" />
                    <span>info@gromanka.sk</span>
                  </div>
                </div>
                <Button
                    onClick={() => scrollToSection("aktivity")}
                    className="bg-sky-600 hover:bg-sky-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-600/20"
                >
                  Naše aktivity
                </Button>
              </div>
              <div
                  className="md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
                  data-aos="fade-left"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent z-10"></div>
                <Image
                    src={getImageSrc("hrabkov-village.jpeg") || "/placeholder.svg"}
                    alt="Obec Hrabkov"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">Obec Hrabkov</h3>
                  <p className="text-white/80">Malebná dedinka v srdci Šariša</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hrabkov Section */}
        <section className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden" id="hrabkov">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-950 mb-2 text-center">Obec Hrabkov</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Malebná obec v prekrásnom prostredí Šarišskej vrchoviny
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-lg">
                <div className="relative h-48">
                  <Image
                      src={getImageSrc("hrabkov-fields.jpeg") || "/placeholder.svg"}
                      alt="Príroda Hrabkova"
                      fill
                      className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Prírodné bohatstvo</h3>
                  <p className="text-gray-700">
                    Hrabkov sa nachádza v malebnom údolí obklopenom lesmi a lúkami. Okolitá príroda ponúka nádherné
                    výhľady a možnosti turistiky.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-lg">
                <div className="relative h-48">
                  <Image
                      src={getImageSrc("hrabkov-ruins.jpeg") || "/placeholder.svg"}
                      alt="História Hrabkova"
                      fill
                      className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Bohatá história</h3>
                  <p className="text-gray-700">
                    Obec má bohatú históriu siahajúcu do dávnych čias. Na území obce sa nachádzajú historické pamiatky a
                    archeologické náleziská.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-lg">
                <div className="relative h-48">
                  <Image
                      src={getImageSrc("hrabkov-aerial.jpeg") || "/placeholder.svg"}
                      alt="Komunita Hrabkova"
                      fill
                      className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Živá komunita</h3>
                  <p className="text-gray-700">
                    Hrabkov je domovom priateľskej komunity, ktorá udržiava tradície a zvyky regiónu. Obec pravidelne
                    organizuje kultúrne a spoločenské podujatia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 bg-white" id="aktivity">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-950 mb-2 text-center">Naše aktivity</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Aktivity združenia Gromanka zamerané na rozvoj obce Hrabkov
            </p>

            <Tabs defaultValue="cultural" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="cultural" className="text-lg">
                  Kultúrno-spoločenské
                </TabsTrigger>
                <TabsTrigger value="environmental" className="text-lg">
                  Environmentálne
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cultural" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-sky-50 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-sky-100 p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">Kultúrne podujatia</h3>
                    </div>
                    <p className="text-gray-700">
                      Organizujeme rôzne kultúrne podujatia, ktoré podporujú miestne tradície a zvyky. Medzi naše aktivity
                      patria folklórne vystúpenia, výstavy a komunitné stretnutia.
                    </p>
                  </div>

                  <div className="bg-sky-50 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-sky-100 p-3 rounded-full">
                        <Info className="h-6 w-6 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">Vzdelávacie aktivity</h3>
                    </div>
                    <p className="text-gray-700">
                      Realizujeme vzdelávacie programy zamerané na históriu a kultúru obce Hrabkov. Organizujeme
                      prednášky, workshopy a exkurzie pre miestnych obyvateľov aj návštevníkov.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="environmental" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-sky-50 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-sky-100 p-3 rounded-full">
                        <Leaf className="h-6 w-6 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">Ochrana prírody</h3>
                    </div>
                    <p className="text-gray-700">
                      Aktívne sa podieľame na ochrane prírodného bohatstva obce Hrabkov. Organizujeme čistenie okolia,
                      výsadbu stromov a vzdelávacie aktivity o ochrane životného prostredia.
                    </p>
                  </div>

                  <div className="bg-sky-50 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-sky-100 p-3 rounded-full">
                        <Camera className="h-6 w-6 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">Dokumentácia krajiny</h3>
                    </div>
                    <p className="text-gray-700">
                      Dokumentujeme prírodné krásy a zmeny v krajine obce Hrabkov. Vytvárame fotografický a video archív,
                      ktorý slúži na vzdelávanie a propagáciu obce.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gradient-to-b from-sky-50 to-white" id="galeria">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-950 mb-2 text-center">Galéria</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Krásne zábery obce Hrabkov a okolitej prírody
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                  <div key={index} className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
                    <Image
                        src={getImageSrc(image.src) || "/placeholder.svg"}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-white/80">{image.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden" id="kontakt">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-sky-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-1 bg-sky-100 rounded-full text-sky-700 font-medium">
                Kontaktujte nás
              </div>
              <h2 className="text-4xl font-bold text-blue-950 mb-4">
                Máte otázky?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                Napíšte nám
              </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Radi vám odpovieme na akékoľvek otázky týkajúce sa nášho združenia alebo aktivít v obci Hrabkov
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-800 to-blue-950 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Kontaktné informácie</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Adresa</h4>
                        <p className="text-white/80">Napájadlá 5, 2277/5, 040 22, Košice</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Email</h4>
                        <p className="text-white/80">info@gromanka.sk</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-phone"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Telefón</h4>
                        <p className="text-white/80">+421 917 917 384</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h4 className="font-medium text-lg mb-4">Sledujte nás</h4>
                    <div className="flex gap-4">
                      <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-facebook"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-instagram"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </a>
                      <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Meno
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                            placeholder="Vaše meno"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Predmet
                      </label>
                      <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder="Predmet správy"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Správa
                      </label>
                      <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder="Vaša správa..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-sky-600 hover:bg-sky-700 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-sky-600/20">
                      Odoslať správu
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* President Section */}
        <section className="py-20 bg-white" id="predseda">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-950 mb-2">Vedenie združenia</h2>
                <p className="text-lg text-gray-700">Spoznajte ľudí, ktorí vedú naše združenie</p>
              </div>

              <Card className="shadow-lg border-0 bg-sky-50/50">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Photo */}
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg">
                        <User className="w-24 h-24 text-gray-400" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="md:col-span-2">
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-sm font-medium mb-2">
                          Predseda a štatutár
                        </div>
                        <h3 className="text-2xl font-bold text-blue-950 mb-4">Michal Chovančák</h3>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                            <HomeIcon className="w-4 h-4 text-sky-600" />
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">Miestne korene:</span>
                            <span className="text-gray-600 ml-2">Má korene z Hrabkova</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 text-sky-600" />
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">Vzdelanie:</span>
                            <span className="text-gray-600 ml-2">Študent TUKE v Košiciach</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                            <Building2 className="w-4 h-4 text-sky-600" />
                          </div>
                          <div>
                            <span className="font-medium text-gray-800">Univerzita:</span>
                            <span className="text-gray-600 ml-2">Technická univerzita v Košiciach</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        Michal Chovančák vedie naše združenie s cieľom rozvíjať jeho aktivity. Ako študent technickej univerzity prináša moderné riešenia a pohľad na rozvoj zdrzuženia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section
            className="py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white relative overflow-hidden"
            id="clenstvo"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-1 bg-sky-900/50 rounded-full text-sky-300 font-medium">
                Členstvo
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Staňte sa{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400">
                členom združenia
              </span>
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Členstvo v združení Gromanka je otvorené pre všetkých, ktorí majú záujem podporiť rozvoj obce Hrabkov a
                zapojiť sa do našich aktivít. Pridajte sa k nám a pomôžte nám chrániť a rozvíjať našu obec.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                    size="lg"
                    className="bg-sky-500 hover:bg-sky-600 text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-500/20"
                >
                  Prihláška za člena
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-sky-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Viac informácií
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-800/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">O.Z. Gromanka</h3>
                <p className="text-white/80 mb-4">
                  Občianske združenie zamerané na rozvoj obce Hrabkov a ochranu jej prírodného bohatstva.
                </p>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin size={16} />
                  <span>Napájadlá 5, 2277/5, 040 22, Košice</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Rýchle odkazy</h3>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => scrollToSection("o-nas")} className="text-white/80 hover:text-white">
                      O združení
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("predseda")} className="text-white/80 hover:text-white">
                      Predseda
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("hrabkov")} className="text-white/80 hover:text-white">
                      Obec Hrabkov
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("aktivity")} className="text-white/80 hover:text-white">
                      Naše aktivity
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("galeria")} className="text-white/80 hover:text-white">
                      Galéria
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("clenstvo")} className="text-white/80 hover:text-white">
                      Členstvo
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Kontakt</h3>
                <div className="space-y-2 text-white/80">
                  <p>Email: info@gromanka.sk</p>
                  <p>Telefón: +421 917 917 384</p>
                </div>
                <div className="mt-4 flex gap-4">
                  <a href="#" className="text-white hover:text-sky-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-sky-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-sky-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>© 2025 O.Z. Gromanka. Všetky práva vyhradené.</p>
            </div>
          </div>
        </footer>
      </div>
  )
}
