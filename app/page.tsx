import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Info, Calendar, Leaf, MapPin, Mail, ChevronDown, Camera } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hrabkov-panorama.jpeg"
            alt="Panoráma obce Hrabkov"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-950/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="text-sky-300">Gromanka</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Občianske združenie</h2>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Rozvíjame kultúrno-spoločenské aktivity a chránime životné prostredie v obci Hrabkov
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
              O združení
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Naše aktivity
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={36} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="o-nas">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-950 mb-6">O združení Gromanka</h2>
              <p className="text-lg text-gray-700 mb-4">
                Občianske združenie Gromanka bolo založené s cieľom podporovať a rozvíjať kultúrno-spoločenské aktivity
                v obci Hrabkov, ako aj chrániť jej jedinečné prírodné prostredie.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Naším poslaním je zachovávať historické a kultúrne dedičstvo obce, organizovať vzdelávacie a
                environmentálne aktivity a prispievať k zveľaďovaniu obce Hrabkov.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-700">
                  <MapPin size={20} />
                  <span>Napájadlá 5, 2277/5, 040 22, Košice</span>
                </div>
                <div className="flex items-center gap-2 text-blue-700">
                  <Mail size={20} />
                  <span>info@gromanka.sk</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/images/hrabkov-village.jpeg" alt="Obec Hrabkov" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Hrabkov Section */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white" id="hrabkov">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-950 mb-2 text-center">Obec Hrabkov</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Malebná obec v prekrásnom prostredí Šarišskej vrchoviny
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-lg">
              <div className="relative h-48">
                <Image src="/images/hrabkov-fields.jpeg" alt="Príroda Hrabkova" fill className="object-cover" />
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
                <Image src="/images/hrabkov-ruins.jpeg" alt="História Hrabkova" fill className="object-cover" />
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
                <Image src="/images/hrabkov-aerial.jpeg" alt="Komunita Hrabkova" fill className="object-cover" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <Image src="/images/hrabkov-panorama.jpeg" alt="Panoráma Hrabkova" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <Image src="/images/hrabkov-mountain.jpeg" alt="Hory pri Hrabkove" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <Image src="/images/hrabkov-village.jpeg" alt="Obec Hrabkov" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <Image src="/images/hrabkov-fields.jpeg" alt="Polia pri Hrabkove" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <Image src="/images/hrabkov-rock.jpeg" alt="Prírodné útvary pri Hrabkove" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <Image src="/images/hrabkov-aerial.jpeg" alt="Letecký pohľad na Hrabkov" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 bg-blue-950 text-white" id="clenstvo">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Staňte sa členom združenia</h2>
            <p className="text-lg text-white/80 mb-8">
              Členstvo v združení Gromanka je otvorené pre všetkých, ktorí majú záujem podporiť rozvoj obce Hrabkov a
              zapojiť sa do našich aktivít.
            </p>
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
              Prihláška za člena
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
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
                  <a href="#o-nas" className="text-white/80 hover:text-white">
                    O združení
                  </a>
                </li>
                <li>
                  <a href="#hrabkov" className="text-white/80 hover:text-white">
                    Obec Hrabkov
                  </a>
                </li>
                <li>
                  <a href="#aktivity" className="text-white/80 hover:text-white">
                    Naše aktivity
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-white/80 hover:text-white">
                    Galéria
                  </a>
                </li>
                <li>
                  <a href="#clenstvo" className="text-white/80 hover:text-white">
                    Členstvo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <div className="space-y-2 text-white/80">
                <p>Email: info@gromanka.sk</p>
                <p>Telefón: +421 900 000 000</p>
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
