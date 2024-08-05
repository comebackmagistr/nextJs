import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductCard,
  ProductsGroupList,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Мясная с аджикой 🌶🌶",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 549,
                    categoryId: 1,
                    items: [{price: 549}]
                  },
                  {
                    id: 2,
                    name: "Креветки со сладким чили",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    price: 589,
                    categoryId: 2,
                    items: [{price: 589}],
                  },
                  {
                    id: 3,
                    name: "Сырная 🌱👶",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 299,
                    categoryId: 3,
                    items: [{price: 299}],
                  },
                  {
                    id: 4,
                    name: "Сырная 🌱👶",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 299,
                    categoryId: 3,
                    items: [{price: 299}],
                  },
                  {
                    id: 5,
                    name: "Сырная 🌱👶",
                    imageUrl:
                      '"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif"',
                    price: 299,
                    categoryId: 3,
                    items: [{price: 299}],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Мясная с аджикой 🌶🌶",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    price: 549,
                    categoryId: 1,
                    items: [{price: 549}]
                  },
                  {
                    id: 2,
                    name: "Креветки со сладким чили",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    price: 589,
                    categoryId: 2,
                    items: [{price: 589}],
                  },
                  {
                    id: 3,
                    name: "Сырная 🌱👶",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 299,
                    categoryId: 3,
                    items: [{price: 299}],
                  },
                  {
                    id: 4,
                    name: "Сырная 🌱👶",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 299,
                    categoryId: 3,
                    items: [{price: 299}],
                  },
                  {
                    id: 5,
                    name: "Сырная 🌱👶",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                    price: 299,
                    categoryId: 3,
                    items: [{price: 299}],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
