import { Avatar, Badge, Box, Button, Card, Flex, Grid, Heading, Progress, Separator, Tabs, Text, Theme } from "@radix-ui/themes"
import styles from "./page.module.css"

const AboutMe = () => {
  return <>
  <div className={styles.container}>
  <Card style={{ maxWidth: "900px" }} size={"5"}>
      <Flex justify="center" direction="column" gap="5" align="center">
        <Avatar
        src="/img/avatar.png" fallback="A" size={"9"}>
        </Avatar>

        <Heading size="7">Никита Князюк | rikudo</Heading>

        <Flex direction="column" align="center" gap="4" style={{ maxWidth: "800px", padding: "2rem" }}>

          <Flex direction="column" align="center" gap="2">
            <Text size="7" weight="bold" style={{ textAlign: "center" }}>
              О себе
            </Text>
            <Badge variant="outline" color="pink" asChild>
              <Text wrap={"wrap"} align={"center"}>Меня зовут Никита, все знают меня как - kokos. Но я предпочитаю - rikudo.
                Люблю сложные задачи и вызовы. Хорошо нахожу контакт с людьми, всегда стараюсь войти в положенние и помочь коллегам. 
                Уверенный , решительный. Нахожу выход всегда, даже из самых незапланированных ситуаций. Люблю учиться и изучать что-либо, готов
                решать трудные задачи и идти с командой рука об руку , даже в самые трудные моменты ♥ 
              </Text>
            </Badge>
          </Flex>

          <Separator orientation="horizontal" my={"7"} size={"4"} />

          <Tabs.Root defaultValue="projects" style={{ width: "100%" }}>
            <Tabs.List>
              <Tabs.Trigger value="projects">Мои проекты</Tabs.Trigger>
              <Tabs.Trigger value="skills">Мои навыки</Tabs.Trigger>
            </Tabs.List>
         
          <Tabs.Content value="projects">
              <Grid columns="2" gap="4" style={{ marginTop: "1rem" }}>
                {/* Проект 1 */}
                <Card style={{ padding: "1.5rem" }}>
                  <Flex direction={"column"}>
                  <Text weight="bold" size="5">Проект 1: Портфолио сайт</Text>
                  <Text size="3">
                    Сайт портфолио, созданный с использованием React и Next.js + Radix UI.
                  </Text>
                  </Flex>
                  
                  <Flex gap="1" wrap="wrap" style={{ marginTop: "1rem" }}>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Radix UI</Badge>
                  </Flex>
                </Card>

                {/* Проект 2 */}
                <Card style={{ padding: "1.5rem" }}>
                  <Flex direction={"column"}>
                    <Text weight="bold" size="5">Проект 2: Магазин косметики Elseda</Text>
                    <Text size="3">
                      Магазин для продажи косметики
                    </Text>
                  </Flex>
                 
                  <Flex gap="1" wrap="wrap" style={{ marginTop: "1rem" }}>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Nest.js</Badge>
                    <Badge variant="outline">Prisma</Badge>
                  </Flex>
                </Card>

                <Card style={{ padding: "1.5rem" }}>
                  <Flex direction={"column"}>
                    <Text weight="bold" size="5">Проект 3: Админ панель</Text>
                    <Text size="3">
                      Админ панель для управления и визуализации данных
                    </Text>
                  </Flex>
                 
                  <Flex gap="1" wrap="wrap" style={{ marginTop: "1rem" }}>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Radix UI</Badge>
                  </Flex>
                </Card>

                {/* Проект 3 */}
                <Card style={{ padding: "1.5rem" }}>
                  <Flex direction={"column"}>
                    <Text weight="bold" size="5">Проект 4: Система рейтинга в игре Generals ZH</Text>
                    <Text size="3">
                      Система рейтинга в игре Generals ZH и приложение для windows встроенное в generals ZH
                    </Text>
                  </Flex>
                  
                  <Flex gap="1" wrap="wrap" style={{ marginTop: "1rem" }}>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Tauri</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Rust</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">SQLalchemy</Badge>
                    <Badge variant="outline">FastAPI</Badge>
                    <Badge variant="outline">Shadcn/UI</Badge>
                  </Flex>
                </Card>

              
              </Grid>
            </Tabs.Content>

            {/* Навыки */}
            <Tabs.Content value="skills">

              <Box className={styles.layoutWrapper}>
              <Flex direction="column" gap="2">
                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">React</Text>
                  <Progress value={90} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">Radix UI</Text>
                  <Progress value={65} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">Prisma</Text>
                  <Progress value={70} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">Shadcn/UI</Text>
                  <Progress value={40} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">HTML</Text>
                  <Progress value={85} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">CSS</Text>
                  <Progress value={80} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">Next.js</Text>
                  <Progress value={85} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">Python</Text>
                  <Progress value={30} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">Rust</Text>
                  <Progress value={10} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">Nest.js</Text>
                  <Progress value={80} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">Tauri</Text>
                  <Progress value={55} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">Electron</Text>
                  <Progress value={86} />
                </Flex>

                <Flex direction="row" align="center" justify="between" gap={"5"}>
                  <Text weight="bold">TypeScript</Text>
                  <Progress value={75} />
                </Flex>
              </Flex>

              </Box>
              

             
            </Tabs.Content>
         

           
          </Tabs.Root>

          <Separator orientation="horizontal" my={"7"} size={"4"}/>

          {/* Философия */}
          <Flex direction="column" align="center" gap="2">
            <Text size="7" weight="bold" style={{ textAlign: "center" }}>
              Моя философия
            </Text>
            <Text size="3" style={{ textAlign: "center" }}>
              Жизнь — это постоянное развитие. Я верю, что каждый день нужно учиться новому. Кодинг — это искусство решения проблем.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
    
    
  
  </div>
   
  </>
}

export default AboutMe
