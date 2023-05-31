import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
// import { getAuth, signInWithCustomToken } from 'firebase/auth';
// import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button';

import Helmet from '@/components/Helmet';
import Link from '@/components/Link';
import { botName, botUrl } from '@/const';
import BasicLayout from '@/layout/BasicLayout';

// import { db } from '@/firebase';

const Setting: NextPage = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  const formik = useFormik({
    initialValues: {
      bybit_lanchpad: false,
      bybit_flexiable_staking: false,
      airdrops99_airdrops: false,
      coinlist_ico: false,
    },
    async onSubmit(values) {
      if (user) {
        console.log(values);
        // Save user's subscribes data to firebase's firestore
        // const userRef = doc(db, `users/${user.id}`);
        // try {
        //   await setDoc(
        //     userRef,
        //     {
        //       info: user,
        //       updatedAt: serverTimestamp(),
        //       subscribes: values,
        //     },
        //     { merge: true }
        //   );
        //   alert('Saved!');
        // } catch (error) {
        //   alert(`sorry we got some error: ${error}`);
        // }
      }
    },
  });

  const onTelegramLogin = useCallback(async (user: TelegramUser) => {
    setUser(user);
    // Retrieve user data from firebase's firestore
    // const userRef = doc(db, `users/${user.id}`);
    // const docSnap = await getDoc(userRef);
    // if (docSnap.exists()) {
    //   const data = docSnap.data();
    //   formik.setValues({
    //     ...formik.values,
    //     ...data.subscribes,
    //   });
    // } else {
    //   console.log('No document!');
    // }
  }, []);

  const onFakeTelegramLogin = useCallback(() => {
    setUser({
      id: 123,
      first_name: 'Demo',
      username: 'User',
      photo_url: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
      auth_date: 1685466076579,
      hash: 'abcdefghijk',
    });
  }, []);

  return (
    <>
      <Helmet title="Bot Setting" description="CryptoInform Bot Setting" />
      <BasicLayout>
        {!user ? (
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            minH="500px"
          >
            <TelegramLoginButton
              botName={botName}
              dataOnauth={onTelegramLogin}
            />
            <Text mt="5" fontWeight="medium" onClick={onFakeTelegramLogin}>
              Login and edit CryptoInform bot setting
            </Text>
          </Flex>
        ) : (
          <Box py={{ base: '4', md: '8' }} px={{ base: '0', md: '4' }}>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel htmlFor="country">Subscribe Items</FormLabel>
                <Stack>
                  <Checkbox
                    name="bybit_lanchpad"
                    colorScheme="white"
                    iconColor="brand.primary"
                    onChange={formik.handleChange}
                    isChecked={formik.values.bybit_lanchpad}
                  >
                    Bybit IEO/Lanchpad
                  </Checkbox>
                  <Checkbox
                    name="bybit_flexiable_staking"
                    colorScheme="white"
                    iconColor="brand.primary"
                    onChange={formik.handleChange}
                    isChecked={formik.values.bybit_flexiable_staking}
                  >
                    Bybit Flexible Staking
                  </Checkbox>
                  <Checkbox
                    name="airdrops99_airdrops"
                    colorScheme="white"
                    iconColor="brand.primary"
                    onChange={formik.handleChange}
                    isChecked={formik.values.airdrops99_airdrops}
                  >
                    99airdrops airdrop
                  </Checkbox>
                  <Checkbox
                    name="coinlist_ico"
                    colorScheme="white"
                    iconColor="brand.primary"
                    onChange={formik.handleChange}
                    isChecked={formik.values.coinlist_ico}
                  >
                    CoinList ICO
                  </Checkbox>
                </Stack>
              </FormControl>
              <HStack justifyContent="flex-end" spacing="20px" mt="5">
                <Link href={botUrl}>
                  <Button colorScheme="brand" variant="link">
                    Back to bot
                  </Button>
                </Link>
                <Button colorScheme="brand" type="submit">
                  Save
                </Button>
              </HStack>
            </form>
          </Box>
        )}
      </BasicLayout>
    </>
  );
};

export default Setting;
