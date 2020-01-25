const moviesMock = [
  {
    id: '99161d98-3bcc-4f56-9ec8-f94846e656c2',
    title: 'Stowaway',
    year: 2006,
    cover: 'http://dummyimage.com/229x183.jpg/cc0000/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 35,
    contentRating: null,
    source:
      'https://goo.gl/eros.jsp?eget=eget&elit=rutrum&sodales=at&scelerisque=lorem&mauris=integer&sit=tincidunt&amet=ante&eros=vel&suspendisse=ipsum&accumsan=praesent&tortor=blandit&quis=lacinia&turpis=erat&sed=vestibulum&ante=sed&vivamus=magna&tortor=at&duis=nunc&mattis=commodo&egestas=placerat&metus=praesent&aenean=blandit&fermentum=nam&donec=nulla&ut=integer&mauris=pede&eget=justo&massa=lacinia&tempor=eget&convallis=tincidunt&nulla=eget&neque=tempus&libero=vel&convallis=pede&eget=morbi&eleifend=porttitor&luctus=lorem&ultricies=id&eu=ligula&nibh=suspendisse&quisque=ornare&id=consequat&justo=lectus&sit=in&amet=est&sapien=risus&dignissim=auctor&vestibulum=sed&vestibulum=tristique&ante=in&ipsum=tempus&primis=sit&in=amet&faucibus=sem&orci=fusce&luctus=consequat&et=nulla&ultrices=nisl&posuere=nunc&cubilia=nisl&curae=duis&nulla=bibendum&dapibus=felis&dolor=sed&vel=interdum&est=venenatis&donec=turpis&odio=enim&justo=blandit&sollicitudin=mi&ut=in&suscipit=porttitor',
    tags: ['Horror', 'Comedy|Crime', 'Drama|War']
  },
  {
    id: '474e7d60-69f5-4f1d-9815-90e1eb1e56e2',
    title: 'Patch Adams',
    year: 1997,
    cover: 'http://dummyimage.com/145x236.png/dddddd/000000',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 96,
    contentRating: null,
    source:
      'https://uol.com.br/luctus/tincidunt.html?dis=rhoncus&parturient=mauris&montes=enim&nascetur=leo&ridiculus=rhoncus&mus=sed&vivamus=vestibulum&vestibulum=sit&sagittis=amet&sapien=cursus&cum=id&sociis=turpis&natoque=integer&penatibus=aliquet&et=massa&magnis=id&dis=lobortis&parturient=convallis&montes=tortor&nascetur=risus&ridiculus=dapibus&mus=augue&etiam=vel&vel=accumsan&augue=tellus&vestibulum=nisi&rutrum=eu&rutrum=orci&neque=mauris&aenean=lacinia&auctor=sapien&gravida=quis&sem=libero&praesent=nullam&id=sit&massa=amet&id=turpis&nisl=elementum&venenatis=ligula&lacinia=vehicula&aenean=consequat&sit=morbi&amet=a&justo=ipsum&morbi=integer&ut=a&odio=nibh&cras=in&mi=quis&pede=justo&malesuada=maecenas&in=rhoncus&imperdiet=aliquam&et=lacus&commodo=morbi&vulputate=quis&justo=tortor&in=id&blandit=nulla&ultrices=ultrices&enim=aliquet&lorem=maecenas&ipsum=leo&dolor=odio&sit=condimentum&amet=id&consectetuer=luctus&adipiscing=nec&elit=molestie&proin=sed&interdum=justo&mauris=pellentesque&non=viverra&ligula=pede&pellentesque=ac&ultrices=diam&phasellus=cras&id=pellentesque&sapien=volutpat&in=dui&sapien=maecenas&iaculis=tristique&congue=est&vivamus=et&metus=tempus&arcu=semper&adipiscing=est',
    tags: ['Comedy', 'Comedy|Drama', 'Comedy|Romance', 'Drama|War']
  },
  {
    id: 'b0b00c5e-9c7d-4b4b-ba1a-f849a9ea33ba',
    title: 'Dark Knight, The',
    year: 2004,
    cover: 'http://dummyimage.com/206x149.png/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 73,
    contentRating: null,
    source:
      'https://webmd.com/platea/dictumst/etiam/faucibus/cursus/urna.jsp?felis=tincidunt&fusce=in&posuere=leo&felis=maecenas&sed=pulvinar&lacus=lobortis&morbi=est&sem=phasellus&mauris=sit&laoreet=amet&ut=erat&rhoncus=nulla&aliquet=tempus&pulvinar=vivamus&sed=in&nisl=felis&nunc=eu&rhoncus=sapien&dui=cursus&vel=vestibulum&sem=proin&sed=eu&sagittis=mi&nam=nulla&congue=ac&risus=enim&semper=in',
    tags: ['Comedy', 'Drama']
  },
  {
    id: 'a7377325-e345-436e-9273-b219af4758d6',
    title: 'Great King, The (Der große König)',
    year: 2000,
    cover: 'http://dummyimage.com/109x104.png/cc0000/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 22,
    contentRating: null,
    source:
      'https://answers.com/lorem/vitae/mattis.aspx?velit=nulla&id=eget&pretium=eros&iaculis=elementum&diam=pellentesque&erat=quisque&fermentum=porta&justo=volutpat&nec=erat&condimentum=quisque&neque=erat&sapien=eros&placerat=viverra&ante=eget&nulla=congue&justo=eget&aliquam=semper&quis=rutrum&turpis=nulla&eget=nunc&elit=purus&sodales=phasellus&scelerisque=in&mauris=felis&sit=donec&amet=semper&eros=sapien&suspendisse=a&accumsan=libero&tortor=nam&quis=dui&turpis=proin&sed=leo&ante=odio&vivamus=porttitor&tortor=id',
    tags: ['Adventure|Animation|Children|Comedy']
  },
  {
    id: '677d3037-dc5d-4381-acf2-458bd7814f1c',
    title: 'I Am Cuba (Soy Cuba/Ya Kuba)',
    year: 1999,
    cover: 'http://dummyimage.com/224x144.bmp/5fa2dd/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 18,
    contentRating: null,
    source:
      'http://dailymotion.com/mauris/sit/amet/eros/suspendisse.js?ultrices=lacinia&aliquet=eget&maecenas=tincidunt&leo=eget&odio=tempus&condimentum=vel&id=pede&luctus=morbi&nec=porttitor&molestie=lorem&sed=id&justo=ligula&pellentesque=suspendisse&viverra=ornare&pede=consequat&ac=lectus&diam=in&cras=est&pellentesque=risus&volutpat=auctor&dui=sed&maecenas=tristique&tristique=in&est=tempus&et=sit&tempus=amet&semper=sem&est=fusce&quam=consequat&pharetra=nulla&magna=nisl&ac=nunc&consequat=nisl&metus=duis&sapien=bibendum&ut=felis&nunc=sed&vestibulum=interdum&ante=venenatis&ipsum=turpis&primis=enim&in=blandit&faucibus=mi&orci=in&luctus=porttitor&et=pede&ultrices=justo&posuere=eu&cubilia=massa&curae=donec&mauris=dapibus&viverra=duis&diam=at&vitae=velit&quam=eu&suspendisse=est&potenti=congue&nullam=elementum&porttitor=in&lacus=hac&at=habitasse&turpis=platea&donec=dictumst&posuere=morbi&metus=vestibulum&vitae=velit&ipsum=id&aliquam=pretium&non=iaculis&mauris=diam&morbi=erat&non=fermentum&lectus=justo&aliquam=nec&sit=condimentum&amet=neque&diam=sapien&in=placerat&magna=ante&bibendum=nulla&imperdiet=justo&nullam=aliquam&orci=quis&pede=turpis&venenatis=eget&non=elit&sodales=sodales&sed=scelerisque&tincidunt=mauris&eu=sit&felis=amet&fusce=eros&posuere=suspendisse&felis=accumsan&sed=tortor&lacus=quis&morbi=turpis&sem=sed&mauris=ante&laoreet=vivamus',
    tags: ['Comedy']
  },
  {
    id: 'da3ea370-3be6-4a3c-8d08-4abcb6a2d691',
    title: 'Carry on Cabby',
    year: 2009,
    cover: 'http://dummyimage.com/149x168.bmp/dddddd/000000',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 15,
    contentRating: null,
    source:
      'https://twitpic.com/suspendisse/potenti/nullam.json?faucibus=vulputate&accumsan=ut&odio=ultrices&curabitur=vel&convallis=augue&duis=vestibulum&consequat=ante&dui=ipsum&nec=primis&nisi=in&volutpat=faucibus&eleifend=orci&donec=luctus&ut=et&dolor=ultrices&morbi=posuere&vel=cubilia&lectus=curae&in=donec&quam=pharetra&fringilla=magna&rhoncus=vestibulum&mauris=aliquet&enim=ultrices&leo=erat&rhoncus=tortor&sed=sollicitudin&vestibulum=mi&sit=sit&amet=amet&cursus=lobortis&id=sapien&turpis=sapien&integer=non',
    tags: ['Comedy', 'Drama', 'Fantasy', 'Action|Crime|Drama']
  },
  {
    id: '61687b6f-eaec-4d7a-8c25-5e63613d6005',
    title: 'Bullet for the General, A (Quién Sabe?)',
    year: 2006,
    cover: 'http://dummyimage.com/173x185.bmp/cc0000/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 28,
    contentRating: null,
    source:
      'https://cdc.gov/hac/habitasse/platea/dictumst.jpg?mauris=bibendum&sit=morbi&amet=non&eros=quam&suspendisse=nec&accumsan=dui&tortor=luctus&quis=rutrum&turpis=nulla&sed=tellus&ante=in&vivamus=sagittis&tortor=dui&duis=vel&mattis=nisl&egestas=duis&metus=ac&aenean=nibh&fermentum=fusce&donec=lacus&ut=purus&mauris=aliquet&eget=at&massa=feugiat&tempor=non&convallis=pretium&nulla=quis&neque=lectus&libero=suspendisse&convallis=potenti&eget=in&eleifend=eleifend&luctus=quam&ultricies=a&eu=odio&nibh=in&quisque=hac&id=habitasse&justo=platea&sit=dictumst&amet=maecenas&sapien=ut&dignissim=massa&vestibulum=quis&vestibulum=augue&ante=luctus&ipsum=tincidunt&primis=nulla&in=mollis&faucibus=molestie&orci=lorem&luctus=quisque&et=ut',
    tags: ['Action|Crime|Drama|Thriller']
  },
  {
    id: '1abec00b-3f5a-42ef-b876-38875fff857c',
    title: 'Richard Pryor: Live in Concert',
    year: 2000,
    cover: 'http://dummyimage.com/165x209.jpg/ff4444/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    duration: 34,
    contentRating: null,
    source:
      'https://simplemachines.org/luctus/cum/sociis/natoque/penatibus/et/magnis.jsp?aliquam=eleifend&lacus=quam&morbi=a&quis=odio&tortor=in&id=hac&nulla=habitasse&ultrices=platea&aliquet=dictumst&maecenas=maecenas&leo=ut&odio=massa&condimentum=quis&id=augue&luctus=luctus&nec=tincidunt&molestie=nulla&sed=mollis&justo=molestie&pellentesque=lorem&viverra=quisque&pede=ut&ac=erat&diam=curabitur&cras=gravida&pellentesque=nisi&volutpat=at',
    tags: ['Animation|Children|Comedy', 'Documentary', 'Drama', 'Drama']
  },
  {
    id: '65c99f16-89bb-4da9-b7ed-0b3f16374a0c',
    title: 'Fame High',
    year: 1993,
    cover: 'http://dummyimage.com/104x181.bmp/ff4444/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 100,
    contentRating: null,
    source:
      'https://ebay.com/proin/interdum.aspx?praesent=nullam&blandit=molestie&nam=nibh&nulla=in&integer=lectus&pede=pellentesque&justo=at&lacinia=nulla&eget=suspendisse&tincidunt=potenti&eget=cras&tempus=in&vel=purus&pede=eu&morbi=magna&porttitor=vulputate&lorem=luctus&id=cum&ligula=sociis&suspendisse=natoque&ornare=penatibus&consequat=et&lectus=magnis&in=dis&est=parturient&risus=montes&auctor=nascetur&sed=ridiculus&tristique=mus&in=vivamus&tempus=vestibulum&sit=sagittis&amet=sapien&sem=cum&fusce=sociis&consequat=natoque&nulla=penatibus&nisl=et&nunc=magnis&nisl=dis&duis=parturient&bibendum=montes&felis=nascetur&sed=ridiculus&interdum=mus&venenatis=etiam&turpis=vel&enim=augue&blandit=vestibulum&mi=rutrum&in=rutrum&porttitor=neque&pede=aenean&justo=auctor&eu=gravida&massa=sem&donec=praesent&dapibus=id&duis=massa&at=id&velit=nisl&eu=venenatis',
    tags: ['Documentary|Musical']
  },
  {
    id: '08625a72-521a-4b96-b243-6d0d3609288e',
    title: 'Stephen Fry In America - New World',
    year: 1987,
    cover: 'http://dummyimage.com/196x199.jpg/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 29,
    contentRating: null,
    source:
      'http://nifty.com/pellentesque.jsp?faucibus=a&orci=feugiat&luctus=et&et=eros&ultrices=vestibulum&posuere=ac&cubilia=est&curae=lacinia&nulla=nisi&dapibus=venenatis&dolor=tristique&vel=fusce&est=congue&donec=diam&odio=id&justo=ornare&sollicitudin=imperdiet&ut=sapien&suscipit=urna&a=pretium&feugiat=nisl&et=ut&eros=volutpat&vestibulum=sapien&ac=arcu&est=sed&lacinia=augue&nisi=aliquam&venenatis=erat&tristique=volutpat&fusce=in',
    tags: ['Comedy|Drama|Horror']
  }
];

module.exports = {
  moviesMock
};
