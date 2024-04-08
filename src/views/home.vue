<script setup>
import { ref } from "vue";
import headerMenu from "./headerMenu.vue";
import firstImg from "../components/image/白沙灣.jpg";
import secondImg from "../components/image/花蓮.jpg";
import thirdtImg from "../components/image/風景.jpg";
import cardList from "./cardList.vue";
</script>

<template>
  <headerMenu />
  <!-- 幻燈片 -->
  <div id="carousel_img" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          :src="firstImg"
          class="d-block w-100 img_carousel"
          alt="first_img"
        />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img :src="secondImg" class="d-block w-100 img_carousel" alt="..." />
      </div>
      <div class="carousel-item">
        <img :src="thirdtImg" class="d-block w-100 img_carousel" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel_img"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel_img"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div>
    <div class="cardTitleBox">
      <p style="border-bottom: 5px; box-shadow: 0 1px; width: 15cm">
        <span class="cardTitle">確定成團</span>
        <span class="cardSubTitle">大家都搶著加入的熱門行程！！</span>
      </p>
      <!-- <hr style="width: 30%" /> -->
    </div>
    <cardList />
  </div>

  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      recusandae qui nisi quia corrupti et sint quod iusto. Est eligendi
      consequatur consequuntur nostrum natus debitis, temporibus quibusdam!
      Eaque, sapiente officia?
    </p>
    <p>
      Nemo pariatur, ab sequi minima asperiores aspernatur. Eius suscipit
      laborum, ullam animi exercitationem, culpa repudiandae ex quasi doloremque
      odit consectetur veniam facere. Placeat optio, voluptatum expedita nostrum
      minima soluta doloribus.
    </p>
    <p>
      Culpa illum quia ratione sapiente! Maxime in provident voluptatibus
      mollitia enim dignissimos deleniti nulla cupiditate perspiciatis
      consectetur, perferendis molestiae explicabo ipsum exercitationem, dolorum
      modi ut odit ex repellat amet ducimus!
    </p>
    <p>
      Iusto id reprehenderit delectus incidunt beatae temporibus voluptates
      aperiam blanditiis eos aspernatur tempore ex, ipsa asperiores, corrupti ut
      doloremque quaerat quae excepturi veritatis, deleniti recusandae? Qui
      molestias unde at incidunt.
    </p>
    <p>
      Aut fugiat tempore architecto eius fuga voluptatum dignissimos voluptate
      quam distinctio. Earum odit dignissimos molestias quae blanditiis, cumque
      consectetur optio quos. Molestiae, eveniet ipsam tenetur omnis
      exercitationem repellendus repellat necessitatibus?
    </p>
    <p>
      Animi reprehenderit assumenda quam, quia commodi odio explicabo?
      Consequuntur quia quidem et similique perferendis dignissimos molestias
      temporibus accusamus esse eum assumenda, nam, architecto debitis iste cum
      tempore culpa est eveniet.
    </p>
    <p>
      Rerum tenetur temporibus minus. Sequi est praesentium odit in aliquam iure
      dolore, doloremque cum quos tempore debitis quisquam modi fuga dicta
      necessitatibus, ullam porro. Vero natus ducimus ab voluptatum inventore!
    </p>
    <p>
      Ipsam hic laborum pariatur? Natus enim perspiciatis excepturi eos modi id
      dicta. Sed fugit facilis illum aliquam eos deserunt, numquam neque earum
      reiciendis velit ipsam minima tempore rerum. Nulla, qui?
    </p>
    <p>
      Fugiat perferendis officiis dolores autem minima. Inventore repellendus,
      expedita dicta quia dolore officiis nulla alias, accusamus fugiat non
      iusto sequi quisquam perspiciatis nesciunt, dignissimos placeat. Qui sunt
      repudiandae quibusdam aspernatur.
    </p>
    <p>
      Officia magnam neque, maxime ad corrupti aut cupiditate adipisci rem illum
      blanditiis enim vitae quaerat ratione debitis autem sequi numquam, ipsam
      exercitationem. Culpa voluptates autem eveniet ipsa nobis laudantium nemo!
    </p>
    <p>
      Quisquam, voluptatum quod? Itaque quod quibusdam alias, debitis sapiente
      numquam voluptas quas. Aut fugit consequatur nam, veniam quae, sit quam
      corrupti provident aspernatur earum ut corporis vel voluptates culpa
      reiciendis?
    </p>
    <p>
      Saepe ipsa aliquid eaque recusandae exercitationem. Magni recusandae et
      enim quas error quibusdam aliquid nihil eius, blanditiis beatae veniam
      inventore illo, velit impedit veritatis tempora consequuntur aperiam
      nesciunt deserunt odit?
    </p>
    <p>
      Ratione deleniti, officiis nostrum voluptate doloremque sunt alias
      aspernatur soluta dignissimos facere assumenda et modi adipisci nihil
      dolore excepturi, quidem minima consequuntur cupiditate dolorum! Corporis
      quos ad debitis totam optio.
    </p>
    <p>
      Pariatur illum expedita dolorem repellendus nulla ipsa obcaecati
      blanditiis, cumque esse fuga eos enim necessitatibus molestias quis totam
      quae, architecto sequi vitae atque odio asperiores. Eos, sit. Maxime,
      beatae cum!
    </p>
    <p>
      Dolores dolor ullam tenetur impedit debitis quis accusantium quos maxime
      enim! Temporibus veritatis accusamus non consequuntur cum cumque, vitae
      hic voluptatem doloribus nesciunt maxime porro est nemo harum mollitia
      aut?
    </p>
    <p>
      Ab molestiae voluptates vero ea dolorem, autem libero pariatur, accusamus
      modi mollitia adipisci officia harum voluptas! Quibusdam aliquam, illo
      veritatis voluptatibus reprehenderit voluptas modi deleniti sed
      perspiciatis temporibus ut laboriosam.
    </p>
    <p>
      Corporis iure neque inventore eligendi velit deserunt rem natus nam vero
      numquam quod, eaque quaerat animi accusamus ipsum illum placeat quas
      voluptatum optio rerum quia. Voluptate tempora nam voluptas ab!
    </p>
    <p>
      Quaerat veritatis amet laboriosam ad ea officia suscipit quia doloribus
      impedit temporibus, perspiciatis veniam nulla saepe eius excepturi aliquid
      reprehenderit inventore eos minus tempora totam nihil minima labore?
      Obcaecati, molestias.
    </p>
    <p>
      Sed ad aspernatur placeat nihil voluptatibus minus esse minima ut
      explicabo dolorem autem obcaecati laboriosam quaerat provident fuga,
      consequuntur natus magnam voluptate sapiente repellendus tenetur
      molestias. Repellat ab veritatis hic?
    </p>
    <p>
      Nesciunt reprehenderit molestiae quas exercitationem doloremque accusamus
      maxime ducimus animi numquam quidem magni beatae et nemo laudantium
      dignissimos, minima esse perspiciatis nostrum repellat consequatur
      voluptatum praesentium porro eos eveniet. Consectetur!
    </p>
    <p>
      Ut officiis consectetur aspernatur ratione nisi perferendis tempora
      deleniti fugit culpa veniam possimus dolorum iure iusto, earum cum
      adipisci nam ullam distinctio neque provident! Ex error enim natus
      corporis minima.
    </p>
    <p>
      Rem quidem dignissimos nisi ipsam dolore perferendis eveniet esse iste
      ullam inventore, nemo porro facere pariatur? Fugiat maxime, molestias ea
      aperiam architecto officia ducimus. Voluptates tenetur doloribus quibusdam
      porro omnis.
    </p>
    <p>
      Alias qui totam dolorem nulla ut magnam eaque modi debitis autem quasi ex
      quae asperiores, ipsum quo laboriosam soluta odio officiis repellendus
      quos quidem perferendis velit ipsa. Repellendus, consequatur explicabo.
    </p>
    <p>
      Dolores nesciunt iure, voluptatibus officiis saepe hic nam accusantium eos
      asperiores recusandae minus quam provident. Placeat praesentium eveniet
      aliquid amet minima. Enim consectetur nisi velit id harum, modi voluptatem
      beatae.
    </p>
    <p>
      Eligendi eaque fugiat aliquid cumque dicta ducimus est qui repellendus
      odit modi dignissimos quas sequi, labore facilis laudantium maxime tenetur
      ullam? Corporis excepturi voluptatem perferendis enim accusantium libero
      aperiam dolor?
    </p>
    <p>
      Laborum, hic obcaecati molestiae modi ut enim qui a animi iste velit
      exercitationem eligendi neque aut illo dicta magni excepturi debitis
      necessitatibus doloremque esse maxime nulla accusamus! Eligendi, iusto ad.
    </p>
    <p>
      Repellendus iure suscipit aliquid ducimus consectetur qui, commodi nostrum
      accusantium laboriosam assumenda molestias facilis veniam, odio cum animi
      quis eveniet! Alias consequatur animi officiis eveniet eaque eos sit
      aliquam molestiae?
    </p>
    <p>
      Nesciunt hic in provident voluptatibus optio perferendis, quidem sapiente
      possimus, cum magni quisquam pariatur distinctio sequi dolore temporibus
      repellendus deserunt nostrum incidunt rem ab minima voluptate, sint
      excepturi. Sapiente, est?
    </p>
    <p>
      Veritatis architecto impedit saepe recusandae delectus voluptas aperiam ut
      ullam error, minus veniam provident necessitatibus! Exercitationem,
      architecto! Eaque iste ad facilis tempora provident similique vitae
      dolores neque cupiditate, obcaecati adipisci?
    </p>
    <p>
      Aut dolorum, modi explicabo delectus labore temporibus fugiat placeat
      totam corporis quasi magnam atque, dicta tempore ipsum hic expedita? Eos
      corporis nulla aliquid deserunt, minima libero adipisci quas ipsum
      aliquam.
    </p>
  </div>
</template>

<style>
.img_carousel {
  width: 100%;
  height: 480px;
}
.cardTitleBox {
  margin-left: 250px;
}
.cardTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 73px;
  text-align: center;
}
.cardSubTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
}
</style>
