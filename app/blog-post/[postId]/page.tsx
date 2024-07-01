import Navbar from "@/components/LandingPage/Navbar/NavBar";
import { blogPosts } from "@/utilities/constants";

const BlogPage = ({ params }: { params: { postId: string } }) => {
  const decodedPostTitle = decodeURIComponent(params.postId);
  const postTitle = decodedPostTitle.replace(/-/g, " ").trim().toLowerCase();

  const post = blogPosts.find(
    (element) => element.title.trim().toLowerCase() === postTitle
  );

  return (
    <section>
      <Navbar activeItem={3} />
      <main className="section-container mt-[50px]">
        <h3 className="header-headline text-[52px]">{post?.title}</h3>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio enim
          nobis facere nostrum itaque omnis cupiditate perspiciatis ipsa
          similique, quia accusantium! Temporibus optio ratione sequi
          voluptatibus omnis porro iste asperiores! Vero nesciunt porro labore
          recusandae, vel adipisci laborum cupiditate ducimus corrupti harum.
          Nobis ipsam doloremque facilis sapiente quia eligendi totam ea
          excepturi, possimus corrupti ducimus, repellat iusto eos odit
          accusamus. Itaque cupiditate recusandae illo enim, eius neque aperiam
          ea commodi harum natus dolorem porro in illum, voluptates dicta odit
          dolores nam error dolorum quia, laborum nihil eligendi est sit.
          Delectus. Repellat iste dolores consequatur aperiam accusantium amet,
          molestias suscipit, maiores cupiditate, odit sed architecto quo.
          Beatae, aspernatur. Perferendis quis sunt rem quaerat quisquam a
          blanditiis. Corporis quis excepturi eum ratione? Accusantium a in
          omnis necessitatibus sit iusto saepe tempore earum corporis
          perferendis velit doloribus veritatis, accusamus minus quis neque
          asperiores aut quam laborum! Sapiente maxime blanditiis, beatae quas
          ipsam ipsa! Odio reprehenderit provident sint odit assumenda natus
          doloribus vero dolore nisi minima totam, sequi amet omnis culpa ab,
          iusto cupiditate quam? Necessitatibus unde earum deserunt est, fugit
          fuga autem quasi? Magnam quo fugit repellat esse pariatur accusamus
          libero, corporis vero aliquam sint quos accusantium nisi eos laborum
          obcaecati facilis aliquid similique. Sequi expedita ullam, ipsam
          obcaecati veritatis cupiditate quae. Esse? Fugiat aliquam esse itaque
          dolores blanditiis consequuntur at minima veniam? Est vitae sint
          voluptates saepe quos? Dolor facilis tenetur quam ipsum eveniet nobis,
          neque praesentium saepe incidunt laudantium qui fugiat! Ipsa quaerat
          modi vel, cumque nulla, possimus id magni veritatis mollitia aliquid
          eos! Autem, illum delectus? Illo, ullam. Veritatis, nisi qui. Fugiat
          adipisci cupiditate ducimus ad illo sequi voluptatem dolor! Impedit,
          consequatur neque. Dolorum tenetur blanditiis temporibus nam
          doloremque, ea, quo dicta asperiores quisquam omnis maxime quia, modi
          reprehenderit praesentium? Maiores doloribus ab, saepe a magnam in quo
          aliquid eveniet. Totam fugiat id illo vitae dolorum incidunt rerum eos
          aspernatur nisi? Et, alias voluptas eaque ex tenetur ratione ipsa
          placeat ipsum, optio consectetur fugit reprehenderit in? Quis,
          obcaecati. Magni, dolorum? Eum nesciunt delectus ab saepe beatae quis
          rem commodi vero. Culpa temporibus porro obcaecati et numquam,
          laboriosam possimus adipisci voluptates sed minima ullam at ipsa vero
          optio harum corporis minus. Tempore harum dignissimos deserunt
          voluptatem sequi recusandae nobis corrupti nemo aspernatur delectus!
          Nihil deleniti placeat perspiciatis dignissimos, dolor a aut alias
          voluptatem odit quis, itaque aliquam earum nam fugiat delectus.
          Delectus amet ad eos fugit, voluptates necessitatibus? Animi totam
          fugiat facilis quisquam. Iste, qui! Autem corporis modi voluptatem
          eaque fuga ea, eum quasi, quos neque et nulla iusto veniam ipsum.
          Magni distinctio quia illo, officia ex ipsa repudiandae, nulla nam eos
          esse pariatur sit eum recusandae facere vel quo officiis tempora
          corporis veniam? Enim vel voluptatibus tenetur impedit vitae velit.
          Dicta doloribus amet odio molestias nihil, saepe provident rerum
          facilis cum libero impedit illo qui rem. Quis beatae hic corrupti aut
          blanditiis laboriosam, tempora sapiente facere ullam fugiat atque
          quaerat. Accusantium aliquid debitis inventore qui culpa nostrum
          corrupti neque aperiam aliquam veritatis, officiis nam libero in
          consequuntur magnam id architecto atque magni iusto non reprehenderit
          quo necessitatibus nemo modi. Ab. Eligendi ipsam repellendus
          necessitatibus ipsum sint ex enim rerum dolore aliquid quaerat
          temporibus voluptas dolorum recusandae quod quas culpa modi libero
          itaque tenetur, iure saepe et cumque. Recusandae, cum vero? Similique
          quae velit nihil illum officia odit voluptas recusandae alias ipsa
          perferendis, animi culpa unde eligendi ab maxime, aspernatur minus
          modi mollitia repellendus fugit dolore illo beatae? Molestiae, in
          ipsum. Voluptates, accusantium officia? Ipsam, maxime quis. Minus
          laudantium a quae nulla minima magni laborum sunt eius in cum nesciunt
          rerum ipsa blanditiis, inventore asperiores vero quod est excepturi
          tempore commodi? Debitis eligendi tempore repellendus, reiciendis
          veniam, omnis error animi reprehenderit commodi sit maiores quasi
          iusto neque voluptatibus nesciunt ipsa tenetur officiis expedita dicta
          minima sapiente esse, eum aliquam! Reiciendis, enim? Ex quam quae
          magni numquam? Quaerat fugit sapiente veritatis hic nesciunt cum
          aspernatur iste cupiditate asperiores quam unde, veniam dolor atque
          dolores, in expedita officiis cumque mollitia dolorum. Qui, iste?
          Tempore facilis veniam et, quis fugit velit. Repellendus, suscipit
          culpa doloremque voluptatum eaque, nihil iusto ipsam nostrum eum
          cumque odio perferendis reiciendis beatae laboriosam ullam. Laboriosam
          pariatur modi ex id. Libero deleniti facere, animi quod veniam minus
          consectetur, quidem voluptatibus modi sed blanditiis, corporis earum?
          Inventore debitis corporis quia aliquam esse recusandae ipsam
          similique iste praesentium temporibus. Sint, cum esse! Dignissimos in
          mollitia minima explicabo dolorem nostrum itaque? Tempora quasi
          voluptatem neque earum maiores, expedita, dolor laborum iusto et odio
          nesciunt, ipsum atque ullam. Totam inventore quia velit voluptatibus
          saepe!
        </div>
      </main>
    </section>
  );
};

export default BlogPage;
