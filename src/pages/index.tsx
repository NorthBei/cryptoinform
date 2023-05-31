import 'react-vertical-timeline-component/style.min.css';

import {
  Alert,
  AlertDescription,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  BiBot,
  BiCamera,
  BiCheckCircle,
  BiDollarCircle,
  BiDonateHeart,
  BiFlag,
  BiMessageDetail,
  BiNews,
  BiRightArrowAlt,
  BiRocket,
  BiWinkSmile,
} from 'react-icons/bi';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import Helmet from '@/components/Helmet';
import Link from '@/components/Link';
import { botUrl } from '@/const';
import BasicLayout from '@/layout/BasicLayout';
import Section from '@/layout/Section';
import styles from '@/styles/Home.module.css';
import { brand } from '@/theme';

const timelineIconStyle = {
  background: brand.primary,
  color: 'white',
};

const Home = () => {
  const alert = (
    <Alert
      status="info"
      bg="brand.primary"
      color="white"
      variant="solid"
      display="flex"
      justifyContent="center"
      py="2"
      fontWeight="medium"
    >
      <AlertDescription>
        Now supported Bybit IEO/Launchpad projects！
      </AlertDescription>
    </Alert>
  );
  return (
    <>
      <Helmet />
      <BasicLayout preHeader={alert}>
        <Section id="fold" py="5" px="0">
          <Flex
            flexDirection={{ base: 'column-reverse', md: 'row' }}
            minH="80vh"
            alignItems="center"
            justifyContent="flex-end"
            mx="auto"
            px="4"
          >
            <Box w={{ base: '100%', md: '50%' }} my={{ base: '4', md: '0' }}>
              <Heading
                as="h2"
                size="xl"
                fontWeight="bold"
                color="brand.secondary"
              >
                Valuable Crypto Notifications
              </Heading>
              <Text
                fontSize="lg"
                my="5"
                color="brand.lightgrey"
                fontWeight="medium"
              >
                Won&apos;t miss any great invest opportunities such as ICO, IDO,
                IEO, airdrop again by receiving continuous period notification
                in Telegram.
              </Text>
              <Link href={botUrl} isExternal>
                <Button
                  colorScheme="brand"
                  size="lg"
                  borderRadius="40"
                  rightIcon={<BiRightArrowAlt fontSize="25" />}
                  w={{ base: '100%', md: 'initial' }}
                >
                  Try it free
                </Button>
              </Link>
            </Box>
            <Box w={{ base: '100%', md: '50%' }} my={{ base: '4', md: '0' }}>
              <Image
                src="/images/fold.svg"
                alt="what cryptoinform to do."
                w="80%"
                mx="auto"
              />
            </Box>
          </Flex>
        </Section>
        <Section id="easy_to_use">
          <Section.Title
            title="Quick to start, Easy to use"
            subtitle="Start receiving notifications in 3 minutes"
          />

          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            wrap="wrap"
            alignItems={{ base: 'center', md: 'flex-start' }}
            justifyContent="center"
          >
            <VStack
              w={{ base: '100%', sm: '50%', md: '33.3%' }}
              p={{ base: '5', md: '10' }}
              spacing="5"
            >
              <Icon as={BiBot} color="brand.primary" boxSize="50px" />
              <Heading as="h3" color="brand.primary" size="md">
                1. Join Telegram Bot
              </Heading>
              <Text
                fontSize="md"
                color="brand.lightgrey"
                fontWeight="medium"
                textAlign="center"
              >
                Find our bot in telegram by @cryptoinform_bot or{' '}
                <Link href={botUrl} isExternal>
                  <Text as="u">click here to get it</Text>
                </Link>
                .
              </Text>
            </VStack>
            <VStack
              w={{ base: '100%', sm: '50%', md: '33.3%' }}
              p={{ base: '5', md: '10' }}
              spacing="5"
            >
              <Icon as={BiCheckCircle} color="brand.primary" boxSize="50px" />
              <Heading as="h3" color="brand.primary" size="md">
                2. Subscribe items
              </Heading>
              <Text
                fontSize="md"
                color="brand.lightgrey"
                fontWeight="medium"
                textAlign="center"
              >
                Select items in bot, such as Bybit IEO/Launchpad to subscribe.
              </Text>
            </VStack>
            <VStack
              w={{ base: '100%', sm: '50%', md: '33.3%' }}
              p={{ base: '5', md: '10' }}
              spacing="5"
            >
              <Icon as={BiMessageDetail} color="brand.primary" boxSize="50px" />
              <Heading as="h3" color="brand.primary" size="md">
                3. Get notification
              </Heading>
              <Text
                fontSize="md"
                color="brand.lightgrey"
                fontWeight="medium"
                textAlign="center"
              >
                Bot will notify you when Snapshot, Subscription, Distribution
                and Launch period start.
              </Text>
            </VStack>
          </Flex>
          <Center>
            <Link href={botUrl} isExternal>
              <Button
                colorScheme="brand"
                mt="12"
                size="lg"
                borderRadius="40"
                leftIcon={<BiBot />}
              >
                Join Bot
              </Button>
            </Link>
          </Center>
        </Section>
        <Section
          id="how_it_works"
          bg="#f7f7f7"
          className={styles.full_width_section}
          overflowX="hidden"
        >
          <Section.Title
            title="How it works？"
            subtitle={
              <>
                Take{' '}
                <Link
                  href="https://www.bybit.com/en-US/trade/spot/launchdetail/?id=202201101600022"
                  isExternal
                >
                  <Text as="u">Bybit Launchpad - GGM</Text>
                </Link>{' '}
                for example
              </>
            }
          />

          <Box pt="12">
            {/* https://github.com/DefinitelyTyped/DefinitelyTyped/pull/57976 */}
            <VerticalTimeline lineColor={brand.lightgrey}>
              <VerticalTimelineElement
                iconStyle={timelineIconStyle}
                icon={<BiNews />}
              >
                <h3 className="vertical-timeline-element-title">
                  <b>0. New project be released</b>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Any time</h4>
                <p>
                  Bot will notify you only once when we find new project
                  released!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={timelineIconStyle}
                icon={<BiCamera />}
              >
                <h3 className="vertical-timeline-element-title">
                  <b>1. Snapshot Period</b>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  2022-01-13 00:00 - 2022-01-17 23:59（UTC）
                </h4>
                <p>
                  Bot will notify you every 4 hour from the start time (around
                  2022-01-13 00:00, 04:00, 08:00 ... until 2022-01-17 16:00,
                  20:00).
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={timelineIconStyle}
                icon={<BiDollarCircle />}
              >
                <h3 className="vertical-timeline-element-title">
                  <b>2. Subscription Period</b>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  2022-01-18 03:30 - 2022-01-18 10:59（UTC）
                </h4>
                <p>
                  Bot will notify you every an hour from the start time (around
                  2022-01-18 03:30, 04:30, ..., 10:30).
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={timelineIconStyle}
                icon={<BiDonateHeart />}
              >
                <h3 className="vertical-timeline-element-title">
                  <b>3. Distribution Period</b>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  2022-01-18 11:00 - 2022-01-18 11:59（UTC）
                </h4>
                <p>Bot won&apos;t notify anything in this period.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={timelineIconStyle}
                icon={<BiRocket />}
              >
                <h3 className="vertical-timeline-element-title">
                  <b>3. Launch Period</b>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  2022-01-18 12:00（UTC）
                </h4>
                <p>
                  Bot will notify you every 10 mins from 1 hours before start
                  time (around 2022-01-18 11:00, 11:10, 11:20, ... ,11:50,
                  12:00).
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={timelineIconStyle}
                icon={<BiFlag />}
              />
            </VerticalTimeline>
          </Box>
        </Section>
        <Section id="pricing">
          <Section.Title title="Pricing" subtitle="Would I pay for it ?" />
          <Center>
            <VStack
              w={{ base: '100%', sm: '70%', md: '50%' }}
              p={{ base: '5', md: '10' }}
              spacing="5"
            >
              <Icon as={BiWinkSmile} color="brand.primary" boxSize="50px" />
              <Heading as="h3" color="brand.primary" size="md">
                It&apos;s free to use.
              </Heading>
              <Text
                fontSize="md"
                color="brand.lightgrey"
                fontWeight="medium"
                textAlign="center"
              >
                I am a BIT hodler, since I miss the 35x Launchpad project -
                KASTA IEO 😨, I developed this tool, and make it public, just
                want to share this tool with people same as me.
              </Text>
            </VStack>
          </Center>
          <Center>
            <Link href={botUrl} isExternal>
              <Button
                colorScheme="brand"
                mt="12"
                size="lg"
                borderRadius="40"
                leftIcon={<BiMessageDetail />}
              >
                Get notification for free
              </Button>
            </Link>
          </Center>
        </Section>
      </BasicLayout>
    </>
  );
};

export default Home;
