/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '刷刷题',
    image: './img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        刷刷算法题有益身心健康，保持头脑清醒，让你的大脑永葆青春。研究表明每天花一小时刷算法题，你的人生就会消耗六十分钟。
      </>
    ),
  },
  {
    title: '记笔记',
    image: './img/undraw_docusaurus_tree.svg',
    description: (
      <>
        在网上看到些好东西，随手记一记，好记性不如烂笔头（指键盘）。无意义的内容也可以记（大部分都是）
      </>
    ),
  },
  {
    title: '写博客',
    image: './img/undraw_docusaurus_react.svg',
    description: (
      <>
        博客并不只属于远古人类，还属于每一个不希望被平台规则限制的新新人类。只可惜现在这里的博客都还是无意义模板。
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
