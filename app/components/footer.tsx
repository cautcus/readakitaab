"use client";

import React from 'react'
import { IconBrandInstagram, IconHeadphones  } from '@tabler/icons-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-brown-500 lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://images.unsplash.com/photo-1484415063229-3d6335668531?q=80&w=1514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>

      <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="/" className="text-gray-700 transition hover:opacity-75">Home</Link>
            </li>

            <li>
              <a href="https://readakitaab.com/privacy-policy" className="text-gray-700 transition hover:opacity-75">Privacy Policy</a>
            </li>

            <li>
              <a href="https://readakitaab.com/terms-and-conditions" className="text-gray-700 transition hover:opacity-75">Terms and Conditions</a>
            </li>
          </ul>

        <ul className="mt-8 flex gap-6">
          <li>
           
          </li>

        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="https://www.instagram.com/readakitaab/" className="text-gray-700 transition hover:opacity-75"><IconBrandInstagram size={32}/></a>
            </li>
            <li>
              <a href="https://www.clubhouse.com/club/read-a-kitaab" className="text-gray-700 transition hover:opacity-75"> <IconHeadphones size={32}/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-neutral-900 pt-4 pb-12">
      <div className="items-center justify-between">
        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
        Copyright © 2021-2024 Read A Kitaab - All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
    );
}